// app/page.tsx
export default function HomePage() {
  return (
    <div
      className='h-screen bg-cover bg-center'
      style={{ backgroundImage: 'url(/images/mv_ph01.webp)' }}
    >
      <div className='flex items-center justify-center h-full bg-black opacity-10'>
        <h1 className='text-white text-5xl'>ウェブサイトへようこそ</h1>
      </div>
    </div>
  );
}
