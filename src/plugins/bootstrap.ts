import type { OrugaOptions, ComponentContext } from "@oruga-ui/oruga-next";
import "../assets/scss/bootstrap-build.scss";

export const bootstrapConfig: OrugaOptions = {
  autocomplete: {
    override: true,
    rootClass: "autocomplete-wrapper",
    itemClass: "dropdown-item",
    itemHoverClass: "active",
    itemEmptyClass: "disabled",
    itemGroupTitleClass: "fw-bold",
  },
  button: {
    override: true,
    rootClass: "btn",
    sizeClass: (size: string) => {
      if (size == "small") return "btn-sm";
      else if (size == "medium") return "btn-md";
      else if (size == "large") return "btn-lg";
    },
    variantClass: (_: string, { props }: ComponentContext) => {
      if (props.outlined) return "";
      return `btn-${props.variant}`;
    },
    roundedClass: "rounded-pill",
    expandedClass: "expanded",
    outlinedClass: (_: string, { props }: ComponentContext) => {
      return `btn-outline-${props.variant}`;
    },
    disabledClass: "btn-disabled",
    invertedClass: "btn-inverted-",
    wrapperClass: "button-wrapper",
  },
  carousel: {
    override: true,
    rootClass: "carousel-wrapper",
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
    rootClass: "dropdown btn-group",
    triggerClass: "dropdown-trigger",
    disabledClass: "disabled",
    expandedClass: "expanded",
    inlineClass: "inline",
    menuMobileOverlayClass: "dropdown-backdrop",
    menuClass: (_: string, { computed }: ComponentContext) => {
      const classes = ["dropdown-menu"];
      if (computed.hoverable) classes.push("show");
      return classes.join(" ");
    },
    menuPositionClass: "position-",
    menuActiveClass: "show",
    itemTag: "a",
    itemClass: "dropdown-item",
    itemActiveClass: "active",
    itemClickableClass: "clickable",
    itemDisabledClass: "disabled",
    mobileClass: "dropdown-modal",
    teleportClass: "teleported",
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
    tableCellClass: "datepicker-cell",
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
    tableCellEventsClass: (_: string, { props }: ComponentContext) => {
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
    timepickerWrapperClass: "timepicker-wrapper d-flex justify-content-center",
  },
  field: {
    override: true,
    rootClass: "input-field",
    bodyClass: "field-wrapper",
    labelClass: "form-label",
    messageClass: "help",
    variantMessageClass: "text-",
    addonsClass: "input-group",
    groupedClass: "input-grouped",
    groupMultilineClass: "grouped-multiline",
    horizontalClass: "field-horizontal row",
    labelHorizontalClass: "col-form-label",
    bodyHorizontalClass: "col-form-field",
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
    inputClass: (_: string, { props }: ComponentContext) => {
      const classes = ["form-control"];
      if (props.icon) classes.push("icon-left");
      if (props.iconRight) classes.push("icon-right");
      return classes.join(" ");
    },
    textareaClass: (_: string, { props }: ComponentContext) => {
      const classes = ["form-control"];
      if (props.icon) classes.push("icon-left");
      if (props.iconRight) classes.push("icon-right");
      return classes.join(" ");
    },
    sizeClass: (_: string, { props }: ComponentContext) => {
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
  },
  menu: {
    override: true,
    rootClass: "menu-wrapper",
    listClass: "menu-list",
    listLabelClass: "menu-label",
    itemWrapperClass: "menu-item-wrapper",
    itemClass: "menu-item",
    itemActiveClass: "active",
    itemDisabledClass: "disabled",
    itemIconTextClass: "menu-icon",
    itemSubmenuClass: "menu-submenu",
  },
  modal: {
    override: true,
    rootClass: "modal fade",
    activeClass: "show",
    overlayClass: "modal-backdrop",
    contentClass: (_: string, { props }: ComponentContext) => {
      const classes = ["modal-dialog"];
      if (!props.fullScreen) classes.push("modal-dialog-centered");
      return classes.join(" ");
    },
    closeIcon: "",
    closeClass: "btn-close",
    fullScreenClass: "fullscreen",
    mobileClass: "mobile",
    scrollClipClass: "modal-open",
    noScrollClass: "noScroll",
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
    sizeClass: (_: string, { props }: ComponentContext) => {
      if (props.size == "small") return "pagination-sm";
      else if (props.size == "medium") return "pagination-md";
      else if (props.size == "large") return "pagination-lg";
    },
    roundedClass: "rounded-pill",
    simpleClass: "simple",
    orderClass: "order-",
    listClass: (_: string, { props }: ComponentContext) => {
      const classes = ["pagination"];
      if (props.size == "small") classes.push("pagination-sm");
      else if (props.size == "medium") classes.push("pagination-md");
      else if (props.size == "large") classes.push("pagination-lg");
      return classes.join(" ");
    },
    listItemClass: "page-item",
    linkClass: "page-link",
    linkCurrentClass: "active",
    linkDisabledClass: "disabled",
    ellipsisClass: (_: string, { props }: ComponentContext) => {
      const classes = ["pagination-ellipsis"];
      if (props.rounded) classes.push("rounded-pill");
      return classes.join(" ");
    },
    nextButtonClass: "pagination-next page-item",
    prevButtonClass: "pagination-prev page-item",
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
    selectClass: (_: string, { props }: ComponentContext) => {
      const classes = ["form-select"];
      if (props.icon) classes.push("icon-left");
      if (props.iconRight) classes.push("icon-right");
      return classes.join(" ");
    },
    sizeClass: (_: string, { props }: ComponentContext) => {
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
  },
  sidebar: {
    override: true,
    rootClass: "sidebar",
    overlayClass: "offcanvas-backdrop",
    activeClass: "show",
    positionClass: (_: string, { props }: ComponentContext) => {
      if (props.position === "left") return "offcanvas-start";
      else if (props.position === "right") return "offcanvas-end";
      else if (props.position === "top") return "offcanvas-top";
      else if (props.position === "bottom") return "offcanvas-bottom";
      else return "offcanvas-start";
    },
    contentClass: "offcanvas",
    variantClass: "variant-",
    reduceClass: "reduced",
    expandOnHoverClass: "reduced-expand",
    fullheightClass: "fullheight",
    fullwidthClass: "fullwidth",
    mobileClass: "mobile",
    inlineClass: "inline",
    teleportClass: "teleported",
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
    thumbClass: (_: string, { props }: ComponentContext) => {
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
    rootClass: (_: string, { props }: ComponentContext) => {
      const classes = ["steps-wrapper"];
      if (props.variant) classes.push(`variant-${props.variant}`);
      if (props.disabled) classes.push("disabled");
      return classes.join(" ");
    },
    sizeClass: "size-",
    positionClass: "position-",
    verticalClass: "vertical",
    stepsClass: "steps",
    animatedClass: "animated",
    itemHeaderClass: (_: string, { props }: ComponentContext) => {
      const classes = ["step-item"];
      if (props.labelPosition === "left") classes.push("label-left");
      if (props.labelPosition === "right") classes.push("label-right");
      return classes.join(" ");
    },
    itemHeaderVariantClass: "variant-",
    itemHeaderActiveClass: "active",
    itemHeaderPreviousClass: "previous",
    stepLinkClass: "step-link",
    stepLinkLabelClass: "step-title",
    stepLinkClickableClass: "clickable",
    stepMarkerClass: "step-marker",
    stepMarkerRoundedClass: "rounded-pill",
    stepNavigationClass: "step-navigation",
    itemClass: "step-item",
    stepContentClass: "step-content",
    stepContentTransitioningClass: "transition",
  },
  switch: {
    override: true,
    rootClass: "form-check form-switch",
    positionClass: (position: string) => {
      if (position == "left") return "reversed";
    },
    inputClass: (_: string, { props }: ComponentContext) => {
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
    rootClass: "tabs-wrapper",
    positionClass: "position-",
    expandedClass: "expanded",
    verticalClass: "vertical",
    multilineClass: "multiline",
    navTabsClass: "nav",
    navTypeClass: "nav-",
    navSizeClass: "size-",
    navPositionClass: (position: string) => {
      if (position === "left") return "justify-content-start";
      else if (position === "centered") return "justify-content-center";
      else if (position === "right") return "justify-content-end";
    },
    itemWrapperClass: "nav-item",
    itemTag: "a",
    itemHeaderClass: "nav-link",
    itemHeaderActiveClass: () => "active",
    itemHeaderDisabledClass: () => "disabled",
    contentClass: "nav-content",
    transitioningClass: "transition",
  },
  taginput: {
    override: true,
    rootClass: (_: string, { props }: any) => {
      const classes = ["taginput-wrapper"];
      if (props.disabled) classes.push("disabled");
      return classes.join(" ");
    },
    containerClass: (_: string, { props }: any) => {
      const classes = ["taginput", "focus-ring"];
      if (props.variant) classes.push(`focus-ring-${props.variant}`);
      return classes.join(" ");
    },
    itemClass: "badge",
    closeClass: "btn-close",
    variantClass: "variant-",
    expandedClass: "expanded",
    counterClass: "counter",
    autocompleteClasses: { rootClass: "expanded" },
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
