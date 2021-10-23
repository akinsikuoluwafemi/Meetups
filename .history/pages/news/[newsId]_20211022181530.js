import { useRouter } from 'next/router';


export default function DetailPage() {
  
  const router = useRouter();
  console.log(router)
  
  return (
    <div>
      DetailPage
    </div>
  )
}
