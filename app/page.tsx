import Button from '@/components/customUI/Button';
const page = () => {
  return (
    <div>

      <Button type="button" variant="secondary" size="lg" rightIcon="/linkedin.svg" className=' flex justify-center items-center gap-2'>LinkedIn</Button>
      <Button type="button" variant="primary" size="lg" rightIcon="/github.svg" className='flex justify-center items-center gap-2'>Github</Button>

    </div>
  )
}

export default page