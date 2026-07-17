import type { OrugaConfig } from "@oruga-ui/oruga-next";

const bootstrapConfig: OrugaConfig = {
    override: true,
    autocomplete: {
        rootClass: "autocomplete",
        itemEmptyClass: "disabled",
        itemGroupClass: "fw-bold",
    },
    breadcrumb: {
        rootClass: "breadcrumb-wrapper",
        listClass: "breadcrumb",
        itemClass: "breadcrumb-item",
        activeClass: "active",
        disabledClass: "disabled",
        seperatorClass: "seperator",
        sizeClass: "size-",
        variantClass: "variant-",
        positionClass: (position: string) => {
            if (position == "left") return "justify-content-start";
            else if (position == "centered") return "justify-content-center";
            else if (position == "right") return "justify-content-end";
        },
    },
    button: {
        rootClass: "btn",
        sizeClass: (size: string) => {
            if (size == "small") return "btn-sm";
            else if (size == "medium") return "btn-md";
            else if (size == "large") return "btn-lg";
            else return `btn-${size}`;
        },
        variantClass: (_: string, props) => {
            if (props.outlined || props.inverted) return "";
            return `btn-${props.variant}`;
        },
        outlinedClass: (_: string, props) => {
            if (!props.variant) return "btn-outline";
            return `btn-outline-${props.variant}`;
        },
        invertedClass: (_, props) => {
            if (!props.variant) return "btn-inverted";
            return `btn-inverted-${props.variant}`;
        },
        roundedClass: "rounded-pill",
        expandedClass: "expanded",
        disabledClass: "btn-disabled",
        loadingClass: "loading",
    },
    carousel: {
        rootClass: "carousel",
        overlayClass: "carousel-overlay",
        wrapperClass: "carousel-scene",
        itemsClass: "carousel-items carousel-inner",
        itemsDraggingClass: "dragging",
        itemClass: "carousel-item",
        itemActiveClass: "active",
        itemClickableClass: "clickable",
        iconClass: "carousel-control",
        iconAutoplayClass: "carousel-control-autoplay",
        iconNextClass: "carousel-control-next carousel-control-next-icon",
        iconPrevClass: "carousel-control-prev carousel-control-prev-icon",
        indicatorPosition: "position-",
        indicatorsClass: "carousel-indicators",
        indicatorClass: "carousel-indicator",
        indicatorsInsideClass: "inside",
        indicatorsPositionClass: "position-",
        indicatorItemClass: "carousel-indicator-item",
        indicatorItemStyleClass: "indicator-",
        indicatorItemActiveClass: "active",
    },
    checkbox: {
        rootClass: "form-check",
        variantClass: "variant-",
        sizeClass: "size-",
        disabledClass: "disabled",
        inputClass: "form-check-input",
        labelClass: "form-check-label",
    },
    collapse: {
        rootClass: "collapse",
        triggerClass: "collapse-trigger",
        expandedClass: "w-100",
        contentClass: "collapse-content",
    },
    dialog: {
        rootClass: ["dialog", "modal-dialog"],
        mobileClass: undefined,
        activeClass: "active",
        teleportClass: "teleported",
        fullscreenClass: "modal-fullscreen",
        backdropClass: undefined,
        wrapperClass: "modal-content",
        textPositionClass: "text-",
        headerClass: "modal-header",
        titleClass: "modal-title",
        subtitleClass: "modal-subtitle",
        closeClass: "btn-close",
        bodyClass: "modal-body",
        contentClass: "content",
        figureClass: undefined,
        imageClass: undefined,
        footerClass: "modal-footer",
        footerPositionClass: (position: string) => {
            if (position == "left") return "justify-content-start";
            else if (position == "center") return "justify-content-center";
            else if (position == "right") return "justify-content-end";
        },
        scrollClipClass: "scroll-clipped",
        scrollKeepClass: "scroll-hidden",
    },
    dropdown: {
        rootClass: "dropdown",
        teleportClass: "teleported",
        disabledClass: "disabled",
        expandedClass: "expanded",
        triggerClass: "dropdown-trigger",
        contentModalClass: "dropdown-modal",
        contentBackdropClass: "dropdown-backdrop",
        menuClass: "dropdown-menu",
        itemClass: "dropdown-item",
        itemSelectedClass: "active",
        itemFocusedClass: "focused",
        itemClickableClass: "clickable",
        itemDisabledClass: "disabled",
        scrollClipClass: "scroll-clipped",
        scrollKeepClass: "scroll-hidden",
    },
    datepicker: {
        rootClass: "datepicker",
        mobileClass: "mobile",
        triggerClass: "datepicker-trigger",
        contentClass: "datepicker-overlay",
        contentBackdropClass: "datepicker-backdrop",
        headerClass: "datepicker-header",
        footerClass: "datepicker-footer",
        listsClass: "pagination-list",
        prevButtonClass: "pagination-previous btn",
        nextButtonClass: "pagination-next btn",
        tableClass: "datepicker-table",
        tableBodyClass: "datepicker-body",
        tableHeadClass: "datepicker-header",
        tableHeadCellClass: "datepicker-cell",
        tableRowClass: "datepicker-row",
        tableCellClass: "datepicker-cell focus-ring",
        tableCellSelectableClass: "selectable",
        tableCellUnselectableClass: "unselectable",
        tableCellTodayClass: "today",
        tableCellSelectedClass: "selected",
        tableCellWithinHoveredClass: "hovered-within",
        tableCellFirstHoveredClass: "hovered-first",
        tableCellLastHoveredClass: "hovered-last",
        tableCellFirstSelectedClass: "selected-first",
        tableCellLastSelectedClass: "selected-last",
        tableCellWithinSelectedClass: "selected-within",
        tableCellInvisibleClass: "",
        tableCellNearbyClass: "nearby",
        tableCellEventsClass: (_: string, props) => {
            const classes = ["has-event"];
            if (props.indicators) classes.push(`${props.indicators}`);
            return classes.join(" ");
        },
        tableEventsClass: "events",
        tableEventClass: "event",
        tableEventVariantClass: "variant-",
        monthClass: "datepicker-month",
        monthTableClass: "datepicker-table",
        monthCellClass: "datepicker-cell",
        monthCellSelectableClass: "selectable",
        monthCellUnselectableClass: "unselectable",
        monthCellTodayClass: "today",
        monthCellSelectedClass: "selected",
        monthCellWithinHoveredClass: "hovered-within",
        monthCellFirstHoveredClass: "hovered-first",
        monthCellLastHoveredClass: "hovered-last",
        monthCellFirstSelectedClass: "selected-first",
        monthCellLastSelectedClass: "selected-last",
        monthCellWithinSelectedClass: "selected-within",
        monthEventsClass: "events",
        monthEventClass: "event",
        monthEventVariantClass: "variant-",
    },
    timepicker: {
        rootClass: "timepicker",
        contentClass: "timepicker-overlay",
        contentModalClass: "timepicker-model",
        contentBackdropClass: "timepicker-backdrop",
        separatorClass: "separator",
        footerClass: "timepicker-footer",
        sizeClass: "size-",
        selectAttrs: {
            rootClass: "select",
            selectClass: "form-select",
        },
    },
    datetimepicker: {
        datepickerWrapperClass: "datepicker-wrapper",
        timepickerWrapperClass:
            "timepicker-wrapper d-flex justify-content-center",
    },
    field: {
        rootClass: "input-field",
        bodyClass: "field-wrapper",
        labelClass: "form-label",
        messageClass: "help",
        messageVariantClass: "text-",
        addonsClass: "input-group",
        groupedClass: "input-grouped",
        blockClass: "input-blocked",
        horizontalClass: "field-horizontal row",
        horizontalLabelClass: "col-form-label",
        horizontalBodyClass: "col-form-field",
    },
    icon: {
        rootClass: "icon",
        variantClass: "text-",
        sizeClass: "size-",
        clickableClass: "clickable",
        spinClass: "spin",
    },
    input: {
        rootClass: "input",
        sizeClass: "size-",
        variantClass: "variant-",
        expandedClass: "expanded",
        disabledClass: "disabled",
        roundedClass: "rounded-pill",
        inputClass: (_: string, props) => {
            const classes = ["form-control focus-ring"];
            if (props.icon) classes.push("icon-left");
            if (props.iconRight) classes.push("icon-right");
            if (props.size == "small") classes.push("form-control-sm");
            else if (props.size == "medium") classes.push("form-control-md");
            else if (props.size == "large") classes.push("form-control-lg");
            return classes.join(" ");
        },
        iconLeftClass: "icon-left",
        iconRightClass: "icon-right",
        counterClass: "help counter",
    },
    listbox: {
        rootClass: "listbox list-group",
        selectableClass: "selectable",
        filterableClass: "filterable",
        disabledClass: "disabled",
        multipleClass: "multiple",
        headerClass: "list-group-header list-group-item",
        filterClass: "list-group-filter list-group-item",
        footerClass: "list-group-footer list-group-item",
        emptyClass: "list-group-empty list-group-item",
        listClass: "list-group-list",
        itemClass: "list-group-item",
        itemSelectedClass: "active",
        itemFocusedClass: "focused",
        itemDisabledClass: "disabled",
    },
    loading: {
        rootClass: "loading",
        fullPageClass: "fullpage",
        overlayClass: "loading-overlay",
        labelClass: "loading-label",
        iconClass: "icon",
        scrollClipClass: "scroll-clipped",
        scrollKeepClass: "scroll-hidden",
    },
    menu: {
        rootClass: "menu",
        listClass: "menu-list",
        labelClass: "menu-label",
        itemClass: "menu-item",
        itemButtonClass: "menu-button",
        itemButtonFocusedClass: "focused",
        itemButtonActiveClass: "active",
        itemButtonDisabledClass: "disabled",
        itemButtonIconClass: "menu-icon",
        itemSubmenuClass: "menu-submenu",
    },
    modal: {
        rootClass: "modal fade",
        activeClass: "show",
        overlayClass: "modal-backdrop",
        contentClass: (_: string, props) => {
            const classes = ["modal-dialog"];
            if (!props.fullScreen) classes.push("modal-dialog-centered");
            return classes.join(" ");
        },
        closeIcon: "",
        closeClass: "btn-close",
        fullScreenClass: "fullscreen",
        mobileClass: "mobile",
        scrollClipClass: ["scroll-clipped", "modal-open"],
        scrollKeepClass: "scroll-hidden",
    },
    notification: {
        rootClass: "notifictation alert",
        variantClass: "variant-",
        wrapperClass: "notifictation-wrapper",
        contentClass: "notifictation-content",
        positionClass: "position-",
        iconClass: "media",
        closeClass: "btn-close",
        noticeClass: "notifictations",
        noticePositionClass: "position-",
    },
    pagination: {
        rootClass: "pagination-wrapper",
        sizeClass: (_: string, props) => {
            if (props.size == "small") return "pagination-sm";
            else if (props.size == "medium") return "pagination-md";
            else if (props.size == "large") return "pagination-lg";
        },
        roundedClass: "rounded-pill",
        simpleClass: "simple",
        positionClass: "position-",
        listClass: (_: string, props) => {
            const classes = ["pagination"];
            if (props.size == "small") classes.push("pagination-sm");
            else if (props.size == "medium") classes.push("pagination-md");
            else if (props.size == "large") classes.push("pagination-lg");
            return classes.join(" ");
        },
        listItemClass: "page-item",
        buttonClass: "page-link",
        buttonCurrentClass: "active",
        buttonDisabledClass: "disabled",
        ellipsisClass: (_: string, props) => {
            const classes = ["pagination-ellipsis"];
            if (props.rounded) classes.push("rounded-pill");
            return classes.join(" ");
        },
        buttonNextClass: "pagination-next page-item",
        buttonPrevClass: "pagination-prev page-item",
        infoClass: "pagination-info",
    },
    popover: {
        rootClass: "popover-wrapper",
        triggerClass: "popover-trigger",
        contentClass: "popover",
        contentModalClass: "popover-modal",
        contentBackdropClass: "popover-backdrop",
        headerClass: "popover-header",
        bodyClass: "popover-body",
        closeClass: "btn-close",
    },
    radio: {
        rootClass: "form-check",
        disabledClass: "disabled",
        variantClass: "variant-",
        sizeClass: "size-",
        inputClass: "form-check-input",
        labelClass: "form-check-label",
    },
    select: {
        rootClass: "select",
        sizeClass: "size-",
        variantClass: "variant-",
        expandedClass: "expanded",
        disabledClass: "disabled",
        roundedClass: "rounded-pill",
        multipleClass: "multiple",
        placeholderClass: "empty",
        arrowedClass: "arrowed",
        selectClass: (_: string, props) => {
            const classes = ["form-select focus-ring"];
            if (props.icon) classes.push("icon-left");
            if (props.iconRight) classes.push("icon-right");
            if (props.size == "small") classes.push("form-select-sm");
            else if (props.size == "medium") classes.push("form-select-md");
            else if (props.size == "large") classes.push("form-select-lg");
            return classes.join(" ");
        },
        iconLeftClass: "icon-left",
        iconRightClass: "icon-right",
    },
    sidebar: {
        rootClass: "sidebar",
        overlayClass: "offcanvas-backdrop",
        activeClass: "show",
        positionClass: (_: string, props) => {
            if (props.position === "left") return "offcanvas-start";
            else if (props.position === "right") return "offcanvas-end";
            else if (props.position === "top") return "offcanvas-top";
            else if (props.position === "bottom") return "offcanvas-bottom";
            else return "offcanvas-start";
        },
        contentClass: "offcanvas",
        contentMobileClass: "",
        fullheightClass: "fullheight",
        fullwidthClass: "fullwidth",
        mobileClass: "mobile",
        inlineClass: "inline",
        teleportClass: "teleported",
        scrollClipClass: "scroll-clipped",
        scrollKeepClass: "scroll-hidden",
    },
    skeleton: {
        rootClass: "skeleton",
        itemClass: "skeleton-item",
        roundedClass: "rounded-pill",
        animatedClass: "animated",
        sizeClass: "size-",
        positionClass: (position: string) => {
            if (position == "left") return "align-items-start";
            else if (position == "centered") return "align-items-center";
            else if (position == "right") return "align-items-end";
        },
    },
    slider: {
        rootClass: "slider",
        disabledClass: "disabled",
        variantClass: "variant-",
        trackClass: "slider-track",
        fillClass: "slider-fill",
        thumbWrapperClass: "slider-thumb-wrapper",
        sizeClass: "size-",
        thumbClass: (_: string, props) => {
            const classes = ["slider-thumb", "focus-ring"];
            if (props.variant) classes.push(`variant-${props.variant}`);
            if (props.variant) classes.push(`focus-ring-${props.variant}`);
            return classes.join(" ");
        },
        tickClass: "slider-tick",
        tickLabelClass: "slider-tick-label",
        tickHiddenClass: "slider-tick-hidden",
        thumbRoundedClass: "rounded-pill",
        thumbDraggingClass: "dragging",
    },
    steps: {
        rootClass: (_: string, props) => {
            const classes = ["steps"];
            if (props.variant) classes.push(`variant-${props.variant}`);
            if (props.disabled) classes.push("disabled");
            return classes.join(" ");
        },
        sizeClass: "size-",
        positionClass: "position-",
        verticalClass: "vertical",
        animatedClass: "animated",
        listClass: "steps-list",
        stepClass: "step-item",
        stepActiveClass: "active",
        stepDisabledClass: "disabled",
        stepClickableClass: "clickable",
        stepVariantClass: "variant-",
        stepPositionClass: "label-",
        stepPreviousClass: "previous",
        stepNextClass: "next",
        stepLabelClass: "step-title",
        markerClass: "step-marker",
        markerRoundedClass: "rounded-pill",
        dividerClass: "divider",
        stepPanelClass: "step-item",
        contentClass: "step-content",
        transitioningClass: "transition",
        navigationClass: "step-navigation",
    },
    switch: {
        rounded: true,
        rootClass: "form-check form-switch",
        roundedClass: "rounded",
        positionClass: (position: string) => {
            if (position == "left") return "reversed";
        },
        inputClass: (_: string, props) => {
            const classes = ["form-check-input"];
            if (props.rounded) classes.push("rounded-pill");
            return classes.join(" ");
        },
        labelClass: "form-check-label",
        disabledClass: "disabled",
        sizeClass: "size-",
        variantClass: "variant-",
        passiveVariantClass: "variant-",
    },
    table: {
        rootClass: "table-wrapper",
        wrapperClass: "table-inner",
        tableClass: "table",
        stickyHeaderClass: "table-sticky",
        borderedClass: "table-bordered",
        stripedClass: "table-striped",
        narrowedClass: "table-sm",
        hoverableClass: "table-hover",
        emptyClass: "table-empty",
        footerClass: "table-footer",
        paginationWrapperClass: "table-pagination",
        scrollableClass: "scrollable",
        trDetailedClass: "table-detail",
        trEmptyClass: "table-empty",
        trSelectedClass: "table-active",
        trCheckedClass: "table-checked",
        thClass: "table-th",
        thLabelClass: "column-label",
        thSortableClass: "sortable",
        thSortedClass: "current-sort",
        thSortIconClass: "sort-icon",
        thDetailedClass: "chevron",
        thStickyClass: "sticky",
        thCheckboxClass: "checkbox",
        thPositionClass: "text-",
        tdClass: "table-td",
        tdDetailClass: "chevron",
        tdStickyClass: "sticky",
        tdCheckboxClass: "checkbox",
        tdPositionClass: "text-",
        mobileClass: "mobile-cards",
        mobileSortClass: "table-mobile-sort",
    },
    tabs: {
        tag: "ul",
        itemTag: "li",
        rootClass: "tabs",
        positionClass: "position-",
        expandedClass: "expanded",
        verticalClass: "vertical",
        multilineClass: "multiline",
        typeClass: "type-",
        sizeClass: "size-",
        listClass: (_: string, props) => {
            const classes = ["nav"];
            if (props.type) classes.push(`nav-${props.type}`);
            if (props.position === "left")
                classes.push("justify-content-start");
            else if (props.position === "centered")
                classes.push("justify-content-center");
            else if (props.position === "right")
                classes.push("justify-content-end");
            return classes.join(" ");
        },
        tabClass: "nav-item nav-link",
        tabActiveClass: "active",
        tabDisabledClass: "disabled",
        contentClass: "tab-content",
        transitioningClass: "transition",
    },
    tag: {
        rootClass: "badge",
        closeClass: "btn-close",
        variantClass: "variant-",
        sizeClass: "size-",
        roundedClass: "rounded-pill",
        iconClass: "icon",
        labelClass: "label",
        badgeClass: "position-absolute top-0 start-100 translate-middle",
    },
    taginput: {
        rootClass: (_: string, props) => {
            const classes = ["taginput"];
            if (props.disabled) classes.push("disabled");
            return classes.join(" ");
        },
        containerClass: (_: string, props) => {
            const classes = ["taginput-wrapper", "focus-ring"];
            if (props.variant) classes.push(`focus-ring-${props.variant}`);
            return classes.join(" ");
        },
        itemClass: "badge",
        variantClass: "variant-",
        sizeClass: "size-",
        expandedClass: "expanded",
        counterClass: "counter",
    },
    tooltip: {
        rootClass: "tooltip-wrapper",
        alwaysClass: "always",
        multilineClass: "multiline",
        variantClass: "variant-",
        positionClass: "position-",
        teleportClass: "teleported",
        triggerClass: "tooltip-trigger",
        contentClass: "tooltip-content",
    },
    tree: {
        rootClass: "tree",
        listClass: "tree-list",
        itemClass: "tree-item",
        itemLabelClass: "tree-item-label",
        itemIconClass: "tree-item-icon",
        itemToggleIconClass: "tree-item-toggle-icon",
        disabledClass: "disabled",
        itemSelectableClass: "selectable",
        itemFocusedClass: "focused",
        itemSelectedClass: "active",
        itemDisabledClass: "disabled",
        subtreeClass: "tree-subtree",
    },
    upload: {
        rootClass: "upload",
        variantClass: "variant-",
        expandedClass: "expanded",
        disabledClass: "disabled",
        draggableClass: "upload-draggable",
        draggableHoveredClass: "hovered",
    },
};

export { bootstrapConfig, bootstrapConfig as config };
