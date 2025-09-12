import Link from 'next/link';

export default function StudentInfo() {
  return (
    <main>
      <p>Name: Mason Wang</p>
      <p>
        Github: &nbsp;
        <Link href="https://github.com/Moses-xm" target="_blank">
          https://github.com/Moses-xm
        </Link>
      </p>
    </main>
  );
}
