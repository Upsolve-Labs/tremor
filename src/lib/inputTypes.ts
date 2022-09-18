export type ValueFormatter = {
    (value: number): string
}

const iconVariantValues = [
    'simple',
    'light',
    'shadow',
    'solid',
    'outlined',
] as const;

export type IconVariant = typeof iconVariantValues[number];

export type HorizontalPosition = 'left' | 'right';

export type VerticalPosition = 'top' | 'bottom';

export type Importance = 'primary' | 'secondary';

const deltaTypeValues = [
    'increase',
    'moderateIncrease',
    'decrease',
    'moderateDecrease',
    'unchanged',
] as const;

export type DeltaType = typeof deltaTypeValues[number];

const sizeValues = [
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
] as const;

export type Size = typeof sizeValues[number];

const baseColorValues = [
    'slate',
    'gray',
    'zinc',
    'neutral',
    'stone',
    'red',
    'orange',
    'amber',
    'yellow',
    'lime',
    'green',
    'emerald',
    'teal',
    'cyan',
    'sky',
    'blue',
    'indigo',
    'violet',
    'purple',
    'fuchsia',
    'pink',
    'rose',
] as const;

export type Color = typeof baseColorValues[number];

const twJustifyContentValues = [
    'justify-start',
    'justify-end',
    'justify-center',
    'justify-between',
    'justify-around',
    'justify-evenly',
] as const;

export type JustifyContent = typeof twJustifyContentValues[number];

const twAlignItemsValues = [
    'items-start',
    'items-end',
    'items-center',
    'items-baseline',
    'items-stretch',
] as const;

export type AlignItems = typeof twAlignItemsValues[number];

const twTextAlignmentValues = [
    'text-left',
    'text-center',
    'text-right',
    'text-justify',
    'text-start',
    'text-end',
] as const;

export type TextAlignment = typeof twTextAlignmentValues[number];

const twMaxWidthValues = [
    'max-w-0',
    'max-w-none',
    'max-w-xs',
    'max-w-sm',
    'max-w-md',
    'max-w-lg',
    'max-w-xl',
    'max-w-2xl',
    'max-w-3xl',
    'max-w-4xl',
    'max-w-5xl',
    'max-w-6xl',
    'max-w-7xl',
    'max-w-full',
    'max-w-min',
    'max-w-max',
    'max-w-fit',
    'max-w-prose',
    'max-w-screen-sm',
    'max-w-screen-lg',
    'max-w-screen-xl',
    'max-w-screen-2xl',
] as const;

export type MaxWidth = typeof twMaxWidthValues[number];

const twSpaceXValues = [
    'space-x-0',
    'space-x-0.5',
    'space-x-1',
    'space-x-1.5',
    'space-x-2',
    'space-x-2.5',
    'space-x-3',
    'space-x-3.5',
    'space-x-4',
    'space-x-5',
    'space-x-6',
    'space-x-7',
    'space-x-8',
    'space-x-9',
    'space-x-10',
    'space-x-11',
    'space-x-12',
    'space-x-14',
    'space-x-16',
    'space-x-20',
    'space-x-24',
    'space-x-28',
    'space-x-32',
    'space-x-36',
    'space-x-40',
    'space-x-44',
    'space-x-48',
    'space-x-52',
    'space-x-56',
    'space-x-60',
    'space-x-64',
    'space-x-72',
    'space-x-80',
    'space-x-96',
    '-space-x-0.5',
    '-space-x-1',
    '-space-x-1.5',
    '-space-x-2',
    '-space-x-2.5',
    '-space-x-3',
    '-space-x-3.5',
    '-space-x-4',
    '-space-x-5',
    '-space-x-6',
    '-space-x-7',
    '-space-x-8',
    '-space-x-9',
    '-space-x-10',
    '-space-x-11',
    '-space-x-12',
    '-space-x-14',
    '-space-x-16',
    '-space-x-20',
    '-space-x-24',
    '-space-x-28',
    '-space-x-32',
    '-space-x-36',
    '-space-x-40',
    '-space-x-44',
    '-space-x-48',
    '-space-x-52',
    '-space-x-56',
    '-space-x-60',
    '-space-x-64',
    '-space-x-72',
    '-space-x-80',
    '-space-x-96',
] as const;

export type SpaceX = typeof twSpaceXValues[number];

const twSpaceYValues = [
    'space-y-0',
    'space-y-0.5',
    'space-y-1',
    'space-y-1.5',
    'space-y-2',
    'space-y-2.5',
    'space-y-3',
    'space-y-3.5',
    'space-y-4',
    'space-y-5',
    'space-y-6',
    'space-y-7',
    'space-y-8',
    'space-y-9',
    'space-y-10',
    'space-y-11',
    'space-y-12',
    'space-y-14',
    'space-y-16',
    'space-y-20',
    'space-y-24',
    'space-y-28',
    'space-y-32',
    'space-y-36',
    'space-y-40',
    'space-y-44',
    'space-y-48',
    'space-y-52',
    'space-y-56',
    'space-y-60',
    'space-y-64',
    'space-y-72',
    'space-y-80',
    'space-y-96',
    '-space-y-0.5',
    '-space-y-1',
    '-space-y-1.5',
    '-space-y-2',
    '-space-y-2.5',
    '-space-y-3',
    '-space-y-3.5',
    '-space-y-4',
    '-space-y-5',
    '-space-y-6',
    '-space-y-7',
    '-space-y-8',
    '-space-y-9',
    '-space-y-10',
    '-space-y-11',
    '-space-y-12',
    '-space-y-14',
    '-space-y-16',
    '-space-y-20',
    '-space-y-24',
    '-space-y-28',
    '-space-y-32',
    '-space-y-36',
    '-space-y-40',
    '-space-y-44',
    '-space-y-48',
    '-space-y-52',
    '-space-y-56',
    '-space-y-60',
    '-space-y-64',
    '-space-y-72',
    '-space-y-80',
    '-space-y-96',
] as const;

export type SpaceY = typeof twSpaceYValues[number];

const twTopMargins = [
    'mt-0',
    'mt-0.5',
    'mt-1',
    'mt-1.5',
    'mt-2',
    'mt-2.5',
    'mt-3',
    'mt-3.5',
    'mt-4',
    'mt-5',
    'mt-6',
    'mt-7',
    'mt-8',
    'mt-9',
    'mt-10',
    'mt-11',
    'mt-12',
    'mt-14',
    'mt-16',
    'mt-20',
    'mt-24',
    'mt-28',
    'mt-32',
    'mt-36',
    'mt-40',
    'mt-44',
    'mt-48',
    'mt-52',
    'mt-56',
    'mt-60',
    'mt-64',
    'mt-72',
    'mt-80',
    'mt-96',
    '-mt-0.5',
    '-mt-1',
    '-mt-1.5',
    '-mt-2',
    '-mt-2.5',
    '-mt-3',
    '-mt-3.5',
    '-mt-4',
    '-mt-5',
    '-mt-6',
    '-mt-7',
    '-mt-8',
    '-mt-9',
    '-mt-10',
    '-mt-11',
    '-mt-12',
    '-mt-14',
    '-mt-16',
    '-mt-20',
    '-mt-24',
    '-mt-28',
    '-mt-32',
    '-mt-36',
    '-mt-40',
    '-mt-44',
    '-mt-48',
    '-mt-52',
    '-mt-56',
    '-mt-60',
    '-mt-64',
    '-mt-72',
    '-mt-80',
    '-mt-96',
] as const;

export type MarginTop = typeof twTopMargins[number];

const twLeftPaddings = [
    'pl-0',
    'pl-0.5',
    'pl-1',
    'pl-1.5',
    'pl-2',
    'pl-2.5',
    'pl-3',
    'pl-3.5',
    'pl-4',
    'pl-5',
    'pl-6',
    'pl-7',
    'pl-8',
    'pl-9',
    'pl-10',
    'pl-11',
    'pl-12',
    'pl-14',
    'pl-16',
    'pl-20',
    'pl-24',
    'pl-28',
    'pl-32',
    'pl-36',
    'pl-40',
    'pl-44',
    'pl-48',
    'pl-52',
    'pl-56',
    'pl-60',
    'pl-64',
    'pl-72',
    'pl-80',
    'pl-96',
] as const;

export type PaddingLeft = typeof twLeftPaddings[number];

const twRightPaddings = [
    'pr-0',
    'pr-0.5',
    'pr-1',
    'pr-1.5',
    'pr-2',
    'pr-2.5',
    'pr-3',
    'pr-3.5',
    'pr-4',
    'pr-5',
    'pr-6',
    'pr-7',
    'pr-8',
    'pr-9',
    'pr-10',
    'pr-11',
    'pr-12',
    'pr-14',
    'pr-16',
    'pr-20',
    'pr-24',
    'pr-28',
    'pr-32',
    'pr-36',
    'pr-40',
    'pr-44',
    'pr-48',
    'pr-52',
    'pr-56',
    'pr-60',
    'pr-64',
    'pr-72',
    'pr-80',
    'pr-96',
] as const;

export type PaddingRight = typeof twRightPaddings[number];

const twTopPaddings = [
    'pt-0',
    'pt-0.5',
    'pt-1',
    'pt-1.5',
    'pt-2',
    'pt-2.5',
    'pt-3',
    'pt-3.5',
    'pt-4',
    'pt-5',
    'pt-6',
    'pt-7',
    'pt-8',
    'pt-9',
    'pt-10',
    'pt-11',
    'pt-12',
    'pt-14',
    'pt-16',
    'pt-20',
    'pt-24',
    'pt-28',
    'pt-32',
    'pt-36',
    'pt-40',
    'pt-44',
    'pt-48',
    'pt-52',
    'pt-56',
    'pt-60',
    'pt-64',
    'pt-72',
    'pt-80',
    'pt-96',
] as const;

export type PaddingTop = typeof twTopPaddings[number];

const twBottomPaddings = [
    'pb-0',
    'pb-0.5',
    'pb-1',
    'pb-1.5',
    'pb-2',
    'pb-2.5',
    'pb-3',
    'pb-3.5',
    'pb-4',
    'pb-5',
    'pb-6',
    'pb-7',
    'pb-8',
    'pb-9',
    'pb-10',
    'pb-11',
    'pb-12',
    'pb-14',
    'pb-16',
    'pb-20',
    'pb-24',
    'pb-28',
    'pb-32',
    'pb-36',
    'pb-40',
    'pb-44',
    'pb-48',
    'pb-52',
    'pb-56',
    'pb-60',
    'pb-64',
    'pb-72',
    'pb-80',
    'pb-96',
] as const;

export type PaddingBottom = typeof twBottomPaddings[number];

const twHeights = [
    'h-0',
    'h-0.5',
    'h-1',
    'h-1.5',
    'h-2',
    'h-2.5',
    'h-3',
    'h-3.5',
    'h-4',
    'h-5',
    'h-6',
    'h-7',
    'h-8',
    'h-9',
    'h-10',
    'h-11',
    'h-12',
    'h-14',
    'h-16',
    'h-20',
    'h-24',
    'h-28',
    'h-32',
    'h-36',
    'h-40',
    'h-44',
    'h-48',
    'h-52',
    'h-56',
    'h-60',
    'h-64',
    'h-72',
    'h-80',
    'h-96',
] as const;

export type Height = typeof twHeights[number];

const twWidths = [
    'w-0',
    'w-0.5',
    'w-1',
    'w-1.5',
    'w-2',
    'w-2.5',
    'w-3',
    'w-3.5',
    'w-4',
    'w-5',
    'w-6',
    'w-7',
    'w-8',
    'w-9',
    'w-10',
    'w-11',
    'w-12',
    'w-14',
    'w-16',
    'w-20',
    'w-24',
    'w-28',
    'w-32',
    'w-36',
    'w-40',
    'w-44',
    'w-48',
    'w-52',
    'w-56',
    'w-60',
    'w-64',
    'w-72',
    'w-80',
    'w-96',
] as const;

export type Width = typeof twWidths[number];

const twGapXValues = [
    'gap-x-0',
    'gap-x-0.5',
    'gap-x-1',
    'gap-x-1.5',
    'gap-x-2',
    'gap-x-2.5',
    'gap-x-3',
    'gap-x-3.5',
    'gap-x-4',
    'gap-x-5',
    'gap-x-6',
    'gap-x-7',
    'gap-x-8',
    'gap-x-9',
    'gap-x-10',
    'gap-x-11',
    'gap-x-12',
    'gap-x-14',
    'gap-x-16',
    'gap-x-20',
    'gap-x-24',
    'gap-x-28',
    'gap-x-32',
    'gap-x-36',
    'gap-x-40',
    'gap-x-44',
    'gap-x-48',
    'gap-x-52',
    'gap-x-56',
    'gap-x-60',
    'gap-x-64',
    'gap-x-72',
    'gap-x-80',
    'gap-x-96',
] as const;

export type GapX = typeof twGapXValues[number];

const twGapYValues = [
    'gap-y-0',
    'gap-y-0.5',
    'gap-y-1',
    'gap-y-1.5',
    'gap-y-2',
    'gap-y-2.5',
    'gap-y-3',
    'gap-y-3.5',
    'gap-y-4',
    'gap-y-5',
    'gap-y-6',
    'gap-y-7',
    'gap-y-8',
    'gap-y-9',
    'gap-y-10',
    'gap-y-11',
    'gap-y-12',
    'gap-y-14',
    'gap-y-16',
    'gap-y-20',
    'gap-y-24',
    'gap-y-28',
    'gap-y-32',
    'gap-y-36',
    'gap-y-40',
    'gap-y-44',
    'gap-y-48',
    'gap-y-52',
    'gap-y-56',
    'gap-y-60',
    'gap-y-64',
    'gap-y-72',
    'gap-y-80',
    'gap-y-96',
] as const;

export type GapY = typeof twGapYValues[number];
