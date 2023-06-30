import "../assets/scss/bootstrap-build.scss";

export const bootstrapConfig: any = {
  field: {
    override: true,
    rootClass: "input-field",
    labelClass: "form-label",
    // bodyClass: ''
    messageClass: (_: string, { props }: any) => {
      return `help text-${props.variant}`;
    },
    // variantMessageClass: '',
    addonsClass: "input-group",
    groupedClass: "input-grouped",
    groupMultilineClass: "is-grouped-multiline",
    horizontalClass: "field-horizontal row",
    labelHorizontalClass: "col-form-label",
    bodyHorizontalClass: "col-form-field",
  },
  input: {
    override: true,
    rootClass: "input",
    inputClass: (_: string, { props }: any) => {
      if (props.icon) return "form-control icon-left";
      return `form-control`;
    },
    textareaClass: (_: string, { props }: any) => {
      if (props.icon) return "form-control icon-left";
      return `form-control`;
    },
    roundedClass: "is-rounded",
    sizeClass: (_: string, { props }: any) => {
      if (props.size == "small") return "form-control-sm";
      else if (props.size == "medium") return "form-control-md";
      else if (props.size == "large") return "form-control-lg";
    },
    variantClass: "border-",
    expandedClass: "is-expanded",
    // iconLeftSpaceClass: 'input-group-text',
    iconLeftClass: "is-left",
    iconRightClass: "is-right",
    // iconRightSpaceClass: 'input-group-text',
    counterClass: "help counter",
  },
  select: {
    override: true,
    rootClass: "select",
    selectClass: (_: string, { props }: any) => {
      if (props.icon) return "form-select icon-left";
      return `form-select`;
    },
    roundedClass: "is-rounded",
    variantClass: "border-",
    sizeClass: (_: string, { props }: any) => {
      if (props.size == "small") return "form-select-sm";
      else if (props.size == "medium") return "form-select-md";
      else if (props.size == "large") return "form-select-lg";
    },
    expandedClass: "is-expanded",
    iconLeftClass: "is-left",
    iconRightClass: "is-right",
    // iconLeftSpaceClass: '',
    // iconRightSpaceClass: '',
    // arrowClass: '',
    multipleClass: "is-multiple",
    placeholderClass: "is-empty",
  },
  icon: {
    override: true,
    rootClass: "icon",
    variantClass: "text-",
    sizeClass: "is-",
    clickableClass: "is-clickable",
    spinClass: "is-spin",
  },
  checkbox: {
    override: true,
    rootClass: "form-check",
    disabledClass: "is-disabled",
    checkClass: "form-check-input",
    labelClass: "form-check-label",
    variantClass: "is-",
    sizeClass: "is-",
  },
  radio: {
    override: true,
    rootClass: "form-check",
    disabledClass: "is-disabled",
    checkClass: "form-check-input",
    labelClass: "form-check-label",
    variantClass: "is-",
    sizeClass: "is-",
  },
  switch: {
    override: true,
    rootClass: (_: string, { props }: any) => {
      const classes = ["form-check", "form-switch"];
      if (props.rounded) classes.push("is-rounded");
      return classes.join(" ");
    },
    positionClass: (position: string) => {
      if (position == "left") return "reversed";
    },
    sizeClass: "is-",
    variantClass: "is-",
    passiveVariantClass: "is-",
    disabledClass: "is-disabled",
    // roundedClass: "is-rounded",
    // checkClass: "switch",
    inputClass: "form-check-input",
    labelClass: "form-check-label",
  },
  autocomplete: {
    override: true,
    rootClass: "autocomplete-wrapper",
    expendedClass: "is-expanded",
    menuClass: "dropdown-menu show",
    menuPositionClass: "is-opened-", // top  bottom
    itemClass: "dropdown-item",
    itemHoverClass: "active",
    itemEmptyClasses: "disabled",
    itemGroupTitleClass: "fw-bold",
  },
  inputitems: {
    override: true,
    rootClass: "taginput",
    containerClass: (_: string, { props }: any) => {
      const classes = ["taginput-wrapper", "focus-ring"];
      if (props.variant) classes.push(`focus-ring-${props.variant}`);
      return classes.join(" ");
    },
    itemClass: "badge",
    closeClass: "btn-close",
    variantClass: "is-",
    expandedClass: "is-expanded",
    counterClass: "counter",
  },
  pagination: {
    override: true,
    rootClass: (_: string, { props }: any) => {
      const classes = ["pagination-wrapper pagination"];
      if (props.rounded) classes.push("is-rounded");
      return classes.join(" ");
    },
    sizeClass: (_: string, { props }: any) => {
      if (props.size == "small") return "pagination-sm";
      else if (props.size == "medium") return "pagination-md";
      else if (props.size == "large") return "pagination-lg";
    },
    simpleClass: "is-simple",
    orderClass: (order: string) => {
      return "order-" + order;
    },
    listClass: (_: string, { props }: any) => {
      const classes = ["pagination"];
      if (props.size == "small") classes.push("pagination-sm");
      else if (props.size == "medium") classes.push("pagination-md");
      else if (props.size == "large") classes.push("pagination-lg");
      return classes.join(" ");
    },
    listItemClass: "page-item", // not implementend in oruga yet
    linkClass: "page-link",
    linkCurrentClass: "active",
    linkDisabledClass: "disabled",
    ellipsisClass: "pagination-ellipsis",
    nextBtnClass: "pagination-next page-item",
    prevBtnClass: "pagination-prev page-item",
    infoClass: "pagination-info",
  },
  slider: {
    override: true,
    rootClass: (_: string, { props }: any) => {
      const classes = ["slider"];
      if (props.variant) classes.push(`is-${props.variant}`);
      if (props.rounded) classes.push("is-rounded");
      return classes.join(" ");
    },
    disabledClass: "is-disabled",
    variantClass: "is-",
    trackClass: "slider-track",
    fillClass: "slider-fill",
    thumbWrapperClass: (_: string, { props }: any) => {
      const classes = ["slider-thumb-wrapper"];
      if (props.dragging) classes.push(`is-dragging`);
      return classes.join(" ");
    },
    sizeClass: "is-",
    thumbClass: (_: string, { props }: any) => {
      const classes = ["slider-thumb", "focus-ring"];
      if (props.variant) classes.push(`is-${props.variant}`);
      if (props.variant) classes.push(`focus-ring-${props.variant}`);
      return classes.join(" ");
    },
    tickLabelClass: "slider-tick-label",
    tickHiddenClass: "is-tick-hidden",
    tickClass: "slider-tick",
    thumbRoundedClass: "is-rounded",
    thumbDraggingClass: "is-dragging",
  },
  tabs: {
    override: true,
    rootClass: "nav-tab-wrapper",
    positionClass: "is-",
    expandedClass: "is-expanded",
    verticalClass: "is-vertical",
    multilineClass: "is-multiline",
    navTabsClass: "nav",
    navTypeClass: "nav-",
    navSizeClass: "is-",
    navPositionClass: (position: string, { props }: any) => {
      const classes = ["is-" + position];
      if (props.position === "left") classes.push("justify-content-start");
      else if (props.position === "centered")
        classes.push("justify-content-center");
      else if (props.position === "right") classes.push("justify-content-end");
      return classes.join(" ");
    },
    tabItemWrapperClass: "nav-item",
    itemTag: "a",
    itemHeaderClass: "nav-link",
    itemHeaderActiveClass: () => "active",
    itemHeaderDisabledClass: () => "disabled",
    contentClass: "nav-content",
    transitioningClass: "is-transitioning",
  },
  table: {
    override: true,
    rootClass: "table-component",
    wrapperClass: "table-wrapper",
    tableClass: "table",
    borderedClass: "table-bordered",
    stripedClass: "table-striped",
    narrowedClass: "table-sm",
    hoverableClass: "table-hover",
    emptyClass: "is-empty",
    detailedClass: "detail",
    footerClass: "table-footer",
    paginationWrapperClass: "table-pagination",
    scrollableClass: "is-scrollable",
    trSelectedClass: "table-active",
    thSortableClass: "is-sortable",
    thCurrentSortClass: "is-current-sort",
    thSortIconClass: "sort-icon",
    thUnselectableClass: "is-unselectable",
    thCheckboxClass: "th-checkbox",
    thDetailedClass: "th-chevron-cell",
    thStickyClass: "is-sticky",
    thPositionClass: (position: string) => {
      if (position === "left") return "is-left";
      else if (position === "centered") return "is-centered";
      else if (position === "right") return "is-right";
      return;
    },
    tdDetailedChevronClass: "chevron-cell",
    tdStickyClass: "is-sticky",
    tdPositionClass: (position: string) => {
      if (position === "left") return "is-left";
      else if (position === "centered") return "is-centered";
      else if (position === "right") return "is-right";
      return;
    },
    mobileClass: "has-mobile-cards",
    mobileSortClass: "table-mobile-sort field",
  },
  tooltip: {
    override: true,
    rootClass: "tooltip-wrapper",
    contentClass: "tooltip-content",
    triggerClass: "tooltip-trigger",
    alwaysClass: "is-always",
    multilineClass: "is-multiline",
    orderClass: "is-",
    variantClass: "is-",
    positionClass: "is-",
  },
  steps: {
    override: true,
    rootClass: (_: string, { props }: any) => {
      const classes = ["steps-wrapper"];
      if (props.variant) classes.push(`is-${props.variant}`);
      if (props.disables) classes.push("is-disabled");
      return classes.join(" ");
    },
    stepsClass: (_: string, { props }: any) => {
      const classes = ["steps"];
      if (props.animated) classes.push("is-animated");
      if (props.rounded) classes.push("is-rounded");
      if (props.labelPosition === "left") classes.push("has-label-left");
      if (props.labelPosition === "right") classes.push("has-label-right");
      return classes.join(" ");
    },
    itemClass: "step-link",
    itemHeaderClass: "step-item",
    itemHeaderVariantClass: "is-",
    itemHeaderActiveClass: "is-active",
    itemHeaderPreviousClass: "is-previous",
    stepLinkClass: "step-link",
    stepLinkLabelClass: "step-title",
    stepLinkClickableClass: "is-clickable",
    // stepLinkLabelPositionClass: 'is-',
    stepMarkerClass: "step-marker",
    stepNavigationClass: "step-navigation",
    stepContentClass: "step-content",
    verticalClass: "is-vertical",
    positionClass: "is-",
    stepContentTransitioningClass: "is-transitioning",
    sizeClass: "is-",
    variantClass: "is-",
  },
  button: {
    override: true,
    rootClass: "btn",
    sizeClass: (_: string, { props }: any) => {
      if (props.size == "small") return "btn-sm";
      else if (props.size == "medium") return "btn-md";
      else if (props.size == "large") return "btn-lg";
    },
    variantClass: (_: string, { props }: any) => {
      if (props.outlined) return "";
      return `btn-${props.variant}`;
    },
    roundedClass: "is-rounded",
    expandedClass: "is-expanded",
    outlinedClass: (_: string, { props }: any) => {
      return `btn-outline-${props.variant}`;
    },
    disabledClass: "btn-disabled",
    invertedClass: "btn-inverted-",
    elementsWrapperClass: "button-wrapper",
  },
  skeleton: {
    override: true,
    rootClass: "skeleton",
    itemClass: "skeleton-item",
    itemRoundedClass: "is-rounded",
    animationClass: "is-animated",
    sizeClass: "is-",
    positionClass: "is-",
  },
  notification: {
    override: true,
    rootClass: "notifictation alert",
    variantClass: "is-",
    wrapperClass: "notifictation-wrapper",
    contentClass: "notifictation-content",
    positionClass: "is-",
    iconClass: "media",
    closeClass: "btn-close",
    noticeClass: "notifictations",
    noticePositionClass: "is-",
  },
  dropdown: {
    override: true,
    rootClass: (_: string, { props }: any) => {
      const classes = ["dropdown", "btn-group"];
      if (props.position) classes.push(`is-${props.position}`);
      return classes.join(" ");
    },
    triggerClass: "dropdown-trigger",
    disabledClass: "disabled",
    expandedClass: "is-expanded",
    inlineClass: "is-inline",
    menuClass: (_: string, { props, data, computed }: any) => {
      const classes = ["dropdown-menu"];
      if (computed.hoverable) classes.push("show");
      return classes.join(" ");
    },
    menuPositionClass: "is-",
    menuActiveClass: "show",
    menuMobileOverlayClass: "background",
    itemTag: "a",
    itemClass: "dropdown-item",
    itemActiveClass: "active",
    itemDisabledClass: "is-disabled",
    mobileClass: "dropdown-modal",
  },
  collapse: {
    override: true,
    rootClass: "collapse show",
    triggerClass: "collapse-trigger",
    contentClass: "collapse-content",
  },
  datepicker: {
    override: true,
    rootClass: "datepicker",
    headerClass: "datepicker-header",
    footerClass: "datepicker-footer",
    boxClass: "dropdown-item",
    tableClass: "datepicker-table",
    tableHeadClass: "datepicker-header",
    tableHeadCellClass: "datepicker-cell",
    headerButtonsClass: "pagination field justify-content-center",
    prevBtnClass: "pagination-previous btn",
    nextBtnClass: "pagination-next btn",
    listsClass: "pagination-list input-group",
    // tableBodyClass: 'datepicker-body',
    tableBodyClass: (_: string, { props }: any) => {
      const classes = ["datepicker-body"];
      if (props.events) classes.push(`has-events`);
      return classes.join(" ");
    },
    tableRowClass: "datepicker-row",
    tableCellClass: "datepicker-cell",
    tableCellSelectableClass: "is-selectable",
    tableCellUnselectableClass: "is-unselectable",
    tableCellTodayClass: "is-today",
    tableCellSelectedClass: "is-selected",
    tableCellWithinHoveredClass: "is-within-hovered",
    tableCellFirstHoveredClass: "is-first-hovered",
    tableCellLastHoveredClass: "is-last-hovered",
    tableCellFirstSelectedClass: "is-first-selected",
    tableCellLastSelectedClass: "is-last-selected",
    tableCellWithinSelectedClass: "is-within-selected",
    //
    // monthCellClass: 'datepicker-cell',
    // monthCellSelectableClass: 'is-selectable',
    // monthCellUnselectableClass: 'is-unselectable',
    // monthCellTodayClass: 'is-today',
    // monthCellSelectedClass: 'is-selected',
    // monthCellWithinHoveredClass: 'is-within-hovered',
    // monthCellFirstHoveredClass: 'is-first-hovered',
    // monthCellLastHoveredClass: 'is-last-hovered',
    // monthCellFirstSelectedClass: 'is-first-selected',
    // monthCellLastSelectedClass: 'is-last-selected',
    // monthCellWithinSelectedClass: 'is-within-selected',
    //
    tableCellInvisibleClass: "",
    tableCellNearbyClass: "is-nearby",
    tableCellEventsClass: (_: string, { props }: any) => {
      const classes = ["has-event"];
      if (props.indicators) classes.push(`${props.indicators}`);
      return classes.join(" ");
    },
    tableEventVariantClass: "is-",
    tableEventsClass: "events",
    tableEventClass: "event",
  },
  modal: {
    override: true,
    rootClass: (_: string, { props }: any) => {
      const classes = ["modal", "fade"];
      if (props.active) classes.push("show");
      return classes.join(" ");
    },
    overlayClass: "modal-backdrop fade",
    contentClass: (_: string, { props }: any) => {
      const classes = ["modal-dialog"];
      if (!props.fullScreen) classes.push("modal-dialog-centered");
      return classes.join(" ");
    },
    closeIcon: "",
    closeClass: "btn-close",
    fullScreenClass: "is-full-screen",
    mobileClass: "is-mobile",
    scrollClipClass: "modal-open",
    // noScrollClass: '',
  },
  sidebar: {
    override: true,
    rootClass: "sidebar",
    overlayClass: "offcanvas-backdrop",
    contentClass: (_: string, { props }: any) => {
      const classes = ["offcanvas"];
      if (props.position === "left") classes.push("offcanvas-start");
      else if (props.position === "right") classes.push("offcanvas-end");
      else if (props.position === "top") classes.push("offcanvas-top");
      else if (props.position === "bottom") classes.push("offcanvas-bottom");
      else if (props.right) classes.push("offcanvas-end");
      else classes.push("offcanvas-start");
      return classes.join(" ");
    },
    variantClass: "is-",
    staticClass: "position-static",
    absoluteClass: "position-absolute",
    fixedClass: "position-fixed",
    rightClass: "is-right",
    reduceClass: "is-reduced",
    expandOnHoverClass: "is-reduced-expand",
    expandOnHoverFixedClass: "is-reduced-expand-fixed",
    fullheightClass: "is-fullheight",
    fullwidthClass: "is-fullwidth",
    mobileClass: "is-",
  },
  loading: {
    override: true,
    rootClass: "loading",
    fullPageClass: "is-fullpage",
    overlayClass: "loading-overlay",
    iconClass: "icon",
  },
  timepicker: {
    override: true,
    rootClass: "timepicker",
    boxClass: "dropdown-item",
    selectClasses: {
      rootClass: "select",
      selectClass: "form-select",
    },
    separatorClass: "is-colon",
    footerClass: "timepicker-footer",
    sizeClass: "is-",
  },
  upload: {
    override: true,
    rootClass: "upload",
    variantClass: "is-",
    draggableClass: "upload-draggable",
    expandedClass: "is-expanded",
    disabledClass: "is-disabled",
    hoveredClass: "is-hovered",
  },
  carousel: {
    override: true,
    rootClass: "carousel-wrapper",
    overlayClass: "is-overlay",
    sceneClass: "carousel-scene",
    itemsClass: "carousel-items carousel-inner",
    itemsDraggingClass: "is-dragging",
    itemClass: "carousel-item",
    itemActiveClass: "active",
    arrowIconClass: "carousel-control",
    arrowIconNextClass: "carousel-control-next carousel-control-next-icon",
    arrowIconPrevClass: "carousel-control-prev carousel-control-prev-icon",
    indicatorPosition: "is-",
    indicatorsClass: "carousel-indicators",
    indicatorClass: "carousel-indicator",
    indicatorsInsideClass: "is-inside",
    indicatorsInsidePositionClass: "is-",
    indicatorItemClass: "carousel-indicator-item",
    indicatorItemStyleClass: "is-",
    indicatorItemActiveClass: "active",
  },
};
