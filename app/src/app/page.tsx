import Image from 'next/image';

export default function Home() {
  return (
    <main>
        <p>This is the homepage</p>
        <Image src="/icons/icon-4000x4000.png" alt="PurByte Logo" width={512} height={512} />
    </main>
  );
}
