import { client } from '@/libs/microcms';
import Image from 'next/image';

type Props = {
  id: string;
  title: string;
  area: string;
  type: string;
  mainVisual: {
    url: string;
    alt: string;
    height: number;
    width: number;
  };
};

// microCMSからブログ記事を取得
async function getInterviewPosts(): Promise<Props[]> {
  const data = await client.get({
    endpoint: 'interview', // 'interview'はmicroCMSのエンドポイント名
    queries: {
      fields: 'id,title,area,type,mainVisual', // idとtitleを取得
      limit: 5, // 最新の5件を取得
    },
  });
  return data.contents;
}

export default async function CustomerInterview() {
  const posts = await getInterviewPosts();
  return (
    <div className="w-full">
      <div className="h-full bg-zinc-100 p-8 text-center">
        <h1 className="mb-6 text-3xl">お客様インタビュー</h1>
        <p className="mb-12">
          ご葬儀後にお客様から頂戴したインタビューです。
          実際のお葬式で感じたことやご意見などを本音でお話を伺っております。
        </p>
        <ul className="flex flex-wrap justify-center gap-8">
          {posts.map((post) => (
            <li className="w-96 rounded-xl bg-white" key={post.id}>
              <p>{post.title}</p>
              <p>{post.area}</p>
              <p>{post.type}</p>
              <Image
                src={post.mainVisual.url}
                alt={post.title} // タイトルを alt に使うのがよくあるやり方
                width={post.mainVisual.width}
                height={post.mainVisual.height}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
