import { Button } from '@material-tailwind/react'

const MyButton = ({onClick, style, btnText,loading}:any) => {
  return (
    <div>
      <Button 
      loading={loading}
      onClick={onClick} className={`  ${style} bg-bgPrimary  w-full flex justify-center items-center `}  ripple={true}>
        
        {btnText}
      </Button>
    </div>
  )
}

export default MyButton