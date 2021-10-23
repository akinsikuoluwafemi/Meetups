import { useRouter } from 'next/router';


export default function DetailPage() {
  
  const router = useRouter();
  console.log(router)
  router.query.new
  
  return (
    <div>
      DetailPage
    </div>
  )
}
