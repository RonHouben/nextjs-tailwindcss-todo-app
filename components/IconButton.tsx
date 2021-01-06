import Image, { ImageProps } from 'next/image'

type Size = 'small' | 'medium' | 'large'

interface Props {
  src: ImageProps['src']
  size?: Size
  square?: boolean
  shadow?: boolean
  focusable?: boolean
  onClick?: () => void
  onKeyPress?: (e: React.KeyboardEvent<HTMLDivElement>) => void
}

export default function IconButton({
  src,
  size = 'medium',
  square = false,
  shadow = false,
  focusable = true,
  onClick,
  onKeyPress,
}: Props) {
  const sizeClassName: string = getSizeClassName(size)

  return (
    <div
      className={`p-3 m-0.5 select-none focus:animate-pulse hover:animate-pulse focus:bg-gray-300 hover:bg-gray-300 focus:bg-opacity-50 hover:bg-opacity-50 cursor-pointer
      ${sizeClassName} ${!square ? 'rounded-full' : ''} ${
        shadow ? 'shadow-md' : ''
      }`}
      tabIndex={focusable ? 0 : undefined}
      onClick={onClick}
      onKeyPress={onKeyPress}
    >
      <div className='relative h-full w-full '>
        <Image priority layout='fill' src={src} />
      </div>
    </div>
  )
}

function getSizeClassName(size: Size): string {
  switch (size) {
    case 'small':
      return 'h-10 w-10'
    case 'medium':
      return 'h-11 w-11'
    case 'large':
      return 'h-12 w-12'
  }
}