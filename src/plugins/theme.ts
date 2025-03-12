import type { OrugaOptions, ComponentProps } from "@oruga-ui/oruga-next";

const bootstrapConfig: OrugaOptions = {
    autocomplete: {
        override: true,
        rootClass: "autocomplete",
        itemHoverClass: "active",
        itemEmptyClass: "disabled",
        itemGroupTitleClass: "fw-bold",
    },
    button: {
        override: true,
        rootClass: "btn",
        wrapperClass: "button-wrapper",
        sizeClass: (size: string) => {
            if (size == "small") return "btn-sm";
            else if (size == "medium") return "btn-md";
            else if (size == "large") return "btn-lg";
            else return `btn-${size}`;
        },
        variantClass: (_: string, props: ComponentProps) => {
            if (props.outlined) return "";
            return `btn-${props.variant}`;
        },
        outlinedClass: (_: string, props: ComponentProps) => {
            if (!props.variant) return "btn-outline";
            return `btn-outline-${props.variant}`;
        },
        invertedClass: (variant) => {
            if (!variant) return "btn-inverted";
            return `btn-inverted-${variant}`;
        },
        roundedClass: "rounded-pill",
        expandedClass: "expanded",
        disabledClass: "btn-disabled",
        loadingClass: "loading",
    },
    carousel: {
        override: true,
        rootClass: "carousel",
        overlayClass: "carousel-overlay",
        wrapperClass: "carousel-scene",
        itemsClass: "carousel-items carousel-inner",
        itemsDraggingClass: "dragging",
        itemClass: "carousel-item",
        itemActiveClass: "active",
        itemClickableClass: "clickable",
        arrowIconClass: "carousel-control",
        arrowIconNextClass: "carousel-control-next carousel-control-next-icon",
        arrowIconPrevClass: "carousel-control-prev carousel-control-prev-icon",
        indicatorPosition: "position-",
        indicatorsClass: "carousel-indicators",
        indicatorClass: "carousel-indicator",
        indicatorsInsideClass: "inside",
        indicatorsInsidePositionClass: "position-",
        indicatorItemClass: "carousel-indicator-item",
        indicatorItemStyleClass: "indicator-",
        indicatorItemActiveClass: "active",
    },
    checkbox: {
        override: true,
        rootClass: "form-check",
        disabledClass: "disabled",
        inputClass: "form-check-input",
        labelClass: "form-check-label",
        variantClass: "variant-",
        sizeClass: "size-",
    },
    collapse: {
        override: true,
        rootClass: "collapse",
        triggerClass: "collapse-trigger",
        contentClass: "collapse-content",
    },
    dropdown: {
        override: true,
        rootClass: "dropdown",
        triggerClass: "dropdown-trigger",
        disabledClass: "disabled",
        expandedClass: "expanded",
        inlineClass: "inline",
        overlayClass: "dropdown-backdrop",
        menuClass: "dropdown-menu",
        menuPositionClass: "position-",
        menuActiveClass: "show",
        itemTag: "div",
        itemClass: "dropdown-item",
        itemActiveClass: "active",
        itemClickableClass: "clickable",
        itemDisabledClass: "disabled",
        mobileClass: "dropdown-modal",
        teleportClass: "teleported",
        scrollClipClass: "scroll-clipped",
        noScrollClass: "scroll-hidden",
    },
    datepicker: {
        override: true,
        rootClass: "datepicker",
        boxClass: "dropdown-item",
        headerClass: "datepicker-header",
        footerClass: "datepicker-footer",
        headerButtonsClass: "pagination",
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
        monthClass: "datepicker-month",
        monthBodyClass: "datepicker-body",
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
        tableCellInvisibleClass: "",
        tableCellNearbyClass: "nearby",
        tableCellEventsClass: (_: string, props: ComponentProps) => {
            const classes = ["has-event"];
            if (props.indicators) classes.push(`${props.indicators}`);
            return classes.join(" ");
        },
        tableEventVariantClass: "variant-",
        tableEventsClass: "events",
        tableEventClass: "event",
        mobileClass: "mobile",
    },
    timepicker: {
        override: true,
        rootClass: "timepicker",
        boxClass: "dropdown-item",
        selectClasses: {
            rootClass: "select",
            selectClass: "form-select",
        },
        separatorClass: "separator",
        footerClass: "timepicker-footer",
        sizeClass: "size-",
    },
    datetimepicker: {
        override: true,
        datepickerWrapperClass: "datepicker-wrapper",
        timepickerWrapperClass:
            "timepicker-wrapper d-flex justify-content-center",
    },
    field: {
        override: true,
        rootClass: "input-field",
        bodyClass: "field-wrapper",
        labelClass: "form-label",
        messageClass: "help",
        messageVariantClass: "text-",
        addonsClass: "input-group",
        groupedClass: "input-grouped",
        groupMultilineClass: "grouped-multiline",
        horizontalClass: "field-horizontal row",
        horizontalLabelClass: "col-form-label",
        horizontalBodyClass: "col-form-field",
    },
    icon: {
        override: true,
        rootClass: "icon",
        variantClass: "text-",
        sizeClass: "size-",
        clickableClass: "clickable",
        spinClass: "spin",
    },
    input: {
        override: true,
        rootClass: "input",
        inputClass: (_: string, props: ComponentProps) => {
            const classes = ["form-control"];
            if (props.icon) classes.push("icon-left");
            if (props.iconRight) classes.push("icon-right");
            return classes.join(" ");
        },
        textareaClass: (_: string, props: ComponentProps) => {
            const classes = ["form-control"];
            if (props.icon) classes.push("icon-left");
            if (props.iconRight) classes.push("icon-right");
            return classes.join(" ");
        },
        sizeClass: (_: string, props: ComponentProps) => {
            if (props.size == "small") return "form-control-sm";
            else if (props.size == "medium") return "form-control-md";
            else if (props.size == "large") return "form-control-lg";
        },
        variantClass: "border-",
        expandedClass: "expanded",
        disabledClass: "disabled",
        roundedClass: "rounded-pill",
        iconLeftClass: "icon-left",
        iconRightClass: "icon-right",
        // iconLeftSpaceClass: 'input-group-text',
        // iconRightSpaceClass: 'input-group-text',
        counterClass: "help counter",
    },
    loading: {
        override: true,
        rootClass: "loading",
        fullPageClass: "fullpage",
        overlayClass: "loading-overlay",
        labelClass: "loading-label",
        iconClass: "icon",
        scrollClipClass: "scroll-clipped",
        noScrollClass: "scroll-hidden",
    },
    menu: {
        override: true,
        rootClass: "menu",
        listClass: "menu-list",
        listLabelClass: "menu-label",
        itemClass: "menu-item",
        itemButtonClass: "menu-button",
        itemButtonActiveClass: "active",
        itemButtonDisabledClass: "disabled",
        itemButtonIconClass: "menu-icon",
        itemSubmenuClass: "menu-submenu",
    },
    modal: {
        override: true,
        rootClass: "modal fade",
        activeClass: "show",
        overlayClass: "modal-backdrop",
        contentClass: (_: string, props: ComponentProps) => {
            const classes = ["modal-dialog"];
            if (!props.fullScreen) classes.push("modal-dialog-centered");
            return classes.join(" ");
        },
        closeIcon: "",
        closeClass: "btn-close",
        fullScreenClass: "fullscreen",
        mobileClass: "mobile",
        scrollClipClass: ["scroll-clipped", "modal-open"],
        noScrollClass: "scroll-hidden",
    },
    notification: {
        override: true,
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
        override: true,
        rootClass: "pagination-wrapper",
        sizeClass: (_: string, props: ComponentProps) => {
            if (props.size == "small") return "pagination-sm";
            else if (props.size == "medium") return "pagination-md";
            else if (props.size == "large") return "pagination-lg";
        },
        roundedClass: "rounded-pill",
        simpleClass: "simple",
        orderClass: "order-",
        listClass: (_: string, props: ComponentProps) => {
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
        ellipsisClass: (_: string, props: ComponentProps) => {
            const classes = ["pagination-ellipsis"];
            if (props.rounded) classes.push("rounded-pill");
            return classes.join(" ");
        },
        buttonNextClass: "pagination-next page-item",
        buttonPrevClass: "pagination-prev page-item",
        infoClass: "pagination-info",
    },
    radio: {
        override: true,
        rootClass: "form-check",
        disabledClass: "disabled",
        inputClass: "form-check-input",
        labelClass: "form-check-label",
        variantClass: "variant-",
        sizeClass: "size-",
    },
    select: {
        override: true,
        rootClass: "select",
        selectClass: (_: string, props: ComponentProps) => {
            const classes = ["form-select"];
            if (props.icon) classes.push("icon-left");
            if (props.iconRight) classes.push("icon-right");
            return classes.join(" ");
        },
        sizeClass: (_: string, props: ComponentProps) => {
            if (props.size == "small") return "form-select-sm";
            else if (props.size == "medium") return "form-select-md";
            else if (props.size == "large") return "form-select-lg";
        },
        variantClass: "border-",
        expandedClass: "expanded",
        disabledClass: "disabled",
        roundedClass: "rounded-pill",
        iconLeftClass: "icon-left",
        iconRightClass: "icon-right",
        multipleClass: "multiple",
        placeholderClass: "empty",
        arrowClass: "arrowed",
    },
    sidebar: {
        override: true,
        rootClass: "sidebar",
        overlayClass: "offcanvas-backdrop",
        activeClass: "show",
        positionClass: (_: string, props: ComponentProps) => {
            if (props.position === "left") return "offcanvas-start";
            else if (props.position === "right") return "offcanvas-end";
            else if (props.position === "top") return "offcanvas-top";
            else if (props.position === "bottom") return "offcanvas-bottom";
            else return "offcanvas-start";
        },
        contentClass: "offcanvas",
        reduceClass: "reduced",
        expandOnHoverClass: "reduced-expand",
        fullheightClass: "fullheight",
        fullwidthClass: "fullwidth",
        mobileClass: "mobile",
        inlineClass: "inline",
        teleportClass: "teleported",
        scrollClipClass: "scroll-clipped",
        noScrollClass: "scroll-hidden",
    },
    skeleton: {
        override: true,
        rootClass: "skeleton",
        itemClass: "skeleton-item",
        itemRoundedClass: "rounded-pill",
        animationClass: "animated",
        sizeClass: "size-",
        positionClass: (position: string) => {
            if (position == "left") return "align-items-start";
            else if (position == "centered") return "align-items-center";
            else if (position == "right") return "align-items-end";
        },
    },
    slider: {
        override: true,
        rootClass: "slider",
        disabledClass: "disabled",
        variantClass: "variant-",
        trackClass: "slider-track",
        fillClass: "slider-fill",
        thumbWrapperClass: "slider-thumb-wrapper",
        sizeClass: "size-",
        thumbClass: (_: string, props: ComponentProps) => {
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
        override: true,
        rootClass: (_: string, props: ComponentProps) => {
            const classes = ["steps"];
            if (props.variant) classes.push(`variant-${props.variant}`);
            if (props.disabled) classes.push("disabled");
            return classes.join(" ");
        },
        sizeClass: "size-",
        positionClass: "position-",
        verticalClass: "vertical",
        animatedClass: "animated",
        navClass: "steps-list",
        navItemClass: "step-item",
        navItemVariantClass: "variant-",
        navItemActiveClass: "active",
        navItemPreviousClass: "previous",
        navItemNextClass: "next",
        stepClass: "step-link",
        stepLabelClass: "step-title",
        stepClickableClass: "clickable",
        stepLabelPositionClass: "label-",
        markerClass: "step-marker",
        markerRoundedClass: "rounded-pill",
        dividerClass: "divider",
        stepPanelClass: "step-item",
        contentClass: "step-content",
        transitioningClass: "transition",
        navigationClass: "step-navigation",
    },
    switch: {
        override: true,
        rootClass: "form-check form-switch",
        positionClass: (position: string) => {
            if (position == "left") return "reversed";
        },
        inputClass: (_: string, props: ComponentProps) => {
            const classes = ["form-check-input"];
            if (props.rounded) classes.push("rounded-pill");
            return classes.join(" ");
        },
        labelClass: "form-check-label",
        disabledClass: "disabled",
        sizeClass: "size-",
        variantClass: "variant-",
        passiveVariantClass: "variant-",
        switchClass: "d-none",
    },
    table: {
        override: true,
        rootClass: "table-wrapper",
        wrapperClass: "table-inner",
        tableClass: "table",
        stickyHeaderClass: "table-sticky",
        borderedClass: "table-bordered",
        stripedClass: "table-striped",
        narrowedClass: "table-sm",
        hoverableClass: "table-hover",
        emptyClass: "table-empty",
        detailedClass: "table-detail",
        footerClass: "table-footer",
        paginationWrapperClass: "table-pagination",
        scrollableClass: "scrollable",
        trSelectedClass: "table-active",
        trCheckedClass: "table-checked",
        thClass: "table-th",
        thSortableClass: "sortable",
        thCurrentSortClass: "current-sort",
        thSortIconClass: "sort-icon",
        thUnselectableClass: "unselectable",
        thDetailedClass: "chevron",
        thStickyClass: "sticky",
        thCheckboxClass: "checkbox",
        thPositionClass: "text-",
        tdClass: "table-td",
        tdDetailedChevronClass: "chevron",
        tdStickyClass: "sticky",
        tdCheckboxClass: "checkbox",
        tdPositionClass: "text-",
        mobileClass: "mobile-cards",
        mobileSortClass: "table-mobile-sort",
    },
    tabs: {
        override: true,
        rootClass: "tabs",
        positionClass: "position-",
        expandedClass: "expanded",
        verticalClass: "vertical",
        multilineClass: "multiline",
        navClass: "nav",
        navTypeClass: "nav-",
        navSizeClass: "size-",
        navPositionClass: (position: string) => {
            if (position === "left") return "justify-content-start";
            else if (position === "centered") return "justify-content-center";
            else if (position === "right") return "justify-content-end";
        },
        navItemClass: "nav-item",
        itemTag: "button",
        tabClass: "nav-link",
        tabActiveClass: () => "active",
        tabDisabledClass: () => "disabled",
        contentClass: "nav-content",
        transitioningClass: "transition",
    },
    taginput: {
        override: true,
        rootClass: (_: string, props: ComponentProps) => {
            const classes = ["taginput"];
            if (props.disabled) classes.push("disabled");
            return classes.join(" ");
        },
        containerClass: (_: string, props: ComponentProps) => {
            const classes = ["taginput-wrapper", "focus-ring"];
            if (props.variant) classes.push(`focus-ring-${props.variant}`);
            return classes.join(" ");
        },
        itemClass: "badge",
        closeClass: "btn-close",
        variantClass: "variant-",
        expandedClass: "expanded",
        counterClass: "counter",
    },
    tooltip: {
        override: true,
        rootClass: "tooltip-wrapper",
        contentClass: "tooltip-content",
        triggerClass: "tooltip-trigger",
        alwaysClass: "always",
        multilineClass: "multiline",
        variantClass: "variant-",
        positionClass: "position-",
        teleportClass: "teleported",
    },
    upload: {
        override: true,
        rootClass: "upload",
        variantClass: "variant-",
        draggableClass: "upload-draggable",
        expandedClass: "expanded",
        disabledClass: "disabled",
        hoveredClass: "hovered",
    },
};

export { bootstrapConfig, bootstrapConfig as config };
