import { useRouter } from 'next/router';


export default function DetailPage() {
  
  const router = useRouter();
  const newsId = router.query
  router.query.newsId;
  
  return (
    <div>
      DetailPage
    </div>
  )
}
