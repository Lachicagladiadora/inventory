export const IS_EMAIL =
  /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/;

export const IS_UUID =
  /^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$/;

export const IS_TITLE = /^[a-zA-Z0-9]{2}[a-zA-Z0-9 ()#-]{1,23}$/;

export const IS_DESCRIPTION = /^[a-zA-Z0-9\s.,;:()\-#]{10,200}$/;

// export const IS_CATEGORY_ID;// UUID
// export const IS_BRAND;
export const IS_IMAGE_PREVIEW =
  /^https?:\/\/[^\s]+?\.(jpg|jpeg|png|gif|bmp|webp|svg)$/;
export const IS_DATE =
  /^[A-Z][a-z]{2} [A-Z][a-z]{2} \d{2} \d{4} \d{2}:\d{2}:\d{2} GMT[+-]\d{4} \([^)]+\)$/;
// export const IS_AUTHOR ; // UUID

export const RE_POSITIVE_NUMBER = /^(?:\d+|\d+\.\d+)$/;
export const RE_CHANGE_NUMBER = /^(?:\d+(?:\.\d*)?)?$/;
