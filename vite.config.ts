import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import banner from "vite-plugin-banner";
import { viteStaticCopy as copy } from "vite-plugin-static-copy";

import { fileURLToPath } from "url";
import { resolve } from "path";

import pkg from "./package.json" with { type: "json" };

/**
 * Generate a licence file banner with the given package version.
 * @param version package version
 * @returns file banner string
 */
function generate(version: string): string {
    return `/*! Oruga Bootstrap Theme v${version} | MIT License | github.com/oruga-ui/theme-bootstrap */`;
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    if (mode === "development") {
        return {
            root: __dirname,
            plugins: [vue()],
            resolve: {
                alias: {
                    "@": fileURLToPath(new URL("./src", import.meta.url)),
                },
            },
        };
    } else {
        return {
            plugins: [
                // build types in dist/types
                dts({
                    tsconfigPath: "./tsconfig.lib.json",
                    outDirs: "./dist/types",
                    entryRoot: "src/plugins",
                    include: ["src/plugins/theme.ts"],
                }),
                // copy assets into dist
                copy({
                    targets: [{ src: "src/assets/scss", dest: "." }],
                }),
                // adds a banner to every generated dist file
                banner(generate(pkg.version)),
            ],
            resolve: {
                tsconfigPaths: true,
            },
            build: {
                emptyOutDir: true,
                copyPublicDir: false,
                lib: {
                    entry: resolve(__dirname, "src/build.ts"),
                    name: "OrugaThemeBootstrap",
                    fileName: "theme",
                    cssFileName: "theme",
                },
                rollupOptions: {
                    // make sure to externalize deps that shouldn't be bundled
                    // into your library
                    external: ["vue", /oruga\/.*/],
                    output: {
                        // Provide global variables to use in the UMD build
                        // for externalized deps
                        globals: {
                            vue: "Vue",
                        },
                    },
                },
            },
            css: {
                preprocessorOptions: {
                    includePaths: ["node_modules"],
                    scss: {
                        // this can be removed with bootstrap 5.4 (https://github.com/twbs/bootstrap/issues/40962)
                        silenceDeprecations: [
                            "color-functions",
                            "global-builtin",
                            "import",
                        ],
                    },
                },
            },
        };
    }
});
