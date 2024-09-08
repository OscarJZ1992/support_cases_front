import { tv } from 'tailwind-variants';

export const InputVariant = tv({
    base: 'border border-gray-300 p-2 rounded',
    variants: {
        size: {
            sm: 'p-1',
            md: 'p-2',
            lg: 'p-3'
        },
        width: {
            sm: 'w-24',
            md: 'w-48',
            lg: 'w-64',
            xl: 'w-96'
        },
        variant: {
            outline: 'bg-white border border-gray-300 text-gray-700',
            filled: 'bg-white'
        }
    },
    defaultVariants: {
        size: 'md'
    }
});

export const ButtonVariant = tv({
  base: 'font-medium bg-blue-500 text-white rounded-md active:opacity-80',
  variants: {
    color: {
      primary: 'bg-indigo-600 text-white',
      secondary: 'bg-purple-500 text-white',
      disabled: 'bg-gray-400 text-white cursor-not-allowed'
    },
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'px-3 py-2 text-lg'
    }
  },
  compoundVariants: [
    {
      size: ['sm', 'md'],
      class: 'px-3 py-1'
    }
  ],
  defaultVariants: {
    size: 'md',
    color: 'primary'
  }
});