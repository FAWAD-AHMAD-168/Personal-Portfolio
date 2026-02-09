interface SectionHeadingProps {
  children: React.ReactNode;
}
const SectionHeading = ({ children }: SectionHeadingProps) => {
  return (
    <div className=" h-20 w-70  border-b-4 border-(--primary-color)
     flex justify-center items-center text-(--text-primary-color) text-3xl font-bold">{children}</div>
  )
}

export default SectionHeading