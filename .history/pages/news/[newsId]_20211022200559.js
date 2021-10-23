import { useRouter } from 'next/router';


export default function DetailPage() {
  
  const router = useRouter();
  const newsId = router.query.new
  router.query.newsId;
  
  return (
    <div>
      DetailPage
    </div>
  )
}
