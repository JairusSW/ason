/// <reference path="./index.d.ts" />

export const ASON_EFFECTIVE_INITIAL_DATA_SEGMENT_TABLE_LENGTH: usize =
  isDefined(ASON_INITIAL_DATA_SEGMENT_TABLE_LENGTH)
    ? <usize>ASON_INITIAL_DATA_SEGMENT_TABLE_LENGTH
    : <usize>u16.MAX_VALUE;

export const ASON_EFFECTIVE_INITIAL_ARRAY_DATA_SEGMENT_TABLE_LENGTH: usize =
  isDefined(ASON_INITIAL_ARRAY_DATA_SEGMENT_TABLE_LENGTH)
    ? <usize>ASON_INITIAL_ARRAY_DATA_SEGMENT_TABLE_LENGTH
    : <usize>u16.MAX_VALUE;

export const ASON_EFFECTIVE_INITIAL_LINK_TABLE_LENGTH: usize =
  isDefined(ASON_INITIAL_LINK_TABLE_LENGTH)
    ? <usize>ASON_INITIAL_LINK_TABLE_LENGTH
    : <usize>u16.MAX_VALUE;

export const ASON_EFFECTIVE_INITIAL_REFERENCE_TABLE_LENGTH: usize =
  isDefined(ASON_INITIAL_REFERENCE_TABLE_LENGTH)
    ? <usize>ASON_INITIAL_REFERENCE_TABLE_LENGTH
    : <usize>u16.MAX_VALUE;

export const ASON_EFFECTIVE_INITIAL_ARRAY_TABLE_LENGTH: usize =
  isDefined(ASON_INITIAL_ARRAY_TABLE_LENGTH)
    ? <usize>ASON_INITIAL_ARRAY_TABLE_LENGTH
    : <usize>u16.MAX_VALUE;

export const ASON_EFFECTIVE_INITIAL_ARRAY_LINK_TABLE_LENGTH: usize =
  isDefined(ASON_INITIAL_ARRAY_LINK_TABLE_LENGTH)
    ? <usize>ASON_INITIAL_ARRAY_LINK_TABLE_LENGTH
    : <usize>u16.MAX_VALUE;

export const ASON_EFFECTIVE_INITIAL_FIELD_TABLE_LENGTH: usize =
  isDefined(ASON_INITIAL_FIELD_TABLE_LENGTH)
    ? <usize>ASON_INITIAL_FIELD_TABLE_LENGTH
    : <usize>u16.MAX_VALUE;

export const ASON_EFFECTIVE_INITIAL_SET_ENTRY_TABLE_LENGTH: usize =
  isDefined(ASON_INITIAL_SET_ENTRY_TABLE_LENGTH)
    ? <usize>ASON_INITIAL_SET_ENTRY_TABLE_LENGTH
    : <usize>u16.MAX_VALUE;

export const ASON_EFFECTIVE_INITIAL_MAP_KEY_VALUE_PAIR_ENTRY_TABLE_LENGTH: usize =
  isDefined(ASON_INITIAL_MAP_KEY_VALUE_PAIR_ENTRY_TABLE_LENGTH)
    ? <usize>ASON_INITIAL_MAP_KEY_VALUE_PAIR_ENTRY_TABLE_LENGTH
    : <usize>u16.MAX_VALUE;

export const ASON_EFFECTIVE_MAP_REFERENCE_TABLE_LENGTH: usize =
  isDefined(ASON_MAP_REFERENCE_TABLE_LENGTH)
    ? <usize>ASON_MAP_REFERENCE_TABLE_LENGTH
    : <usize>u16.MAX_VALUE;

export const ASON_EFFECTIVE_INITIAL_SET_REFERENCE_TABLE_LENGTH: usize =
  isDefined(ASON_INITIAL_SET_REFERENCE_TABLE_LENGTH)
    ? <usize>ASON_INITIAL_SET_REFERENCE_TABLE_LENGTH
    : <usize>u16.MAX_VALUE;
