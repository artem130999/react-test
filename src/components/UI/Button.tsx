import classNames from 'classnames'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  styleType?: 'primary' | 'secondary' | 'default'
  className?: string
  isActive?: boolean
}

const Button = ({
  children,
  styleType = 'default',
  className,
  isActive,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={classNames('btn', `btn--${styleType}`, className, {
        'btn--active': isActive,
      })}>
      {children}
    </button>
  )
}

export default Button
