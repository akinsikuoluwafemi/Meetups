import { useRouter } from 'next/router';


export default function DetailPage() {
  
  const router = useRouter();
  console.log(router)
  router.query.newsId;
  
  return (
    <div>
      DetailPage
    </div>
  )
}
