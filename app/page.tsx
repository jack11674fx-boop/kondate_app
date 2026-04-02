export default function Home() {
  return (
    <main className="min-h-screen bg-[#fffaf5] text-gray-700">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-16">
        <div className="mb-6 rounded-full bg-pink-100 px-4 py-2 text-sm font-medium text-pink-600 shadow-sm">
          毎日の夕食決めを、もっとラクに
        </div>

        <h1 className="mb-4 text-center text-4xl font-bold leading-tight text-gray-800 md:text-6xl">
          こんだてポン！
        </h1>

        <p className="mb-3 text-center text-xl font-semibold text-gray-700 md:text-2xl">
          今日の夕食、もう悩まない。
        </p>

        <p className="mb-10 max-w-2xl text-center text-base leading-7 text-gray-600 md:text-lg">
          家族の人数・調理時間・予算に合わせて、
          献立候補をわかりやすく提案するWebアプリです。
          忙しい日でも、栄養バランスを意識した夕食を
          短時間で決められます。
        </p>

        <div className="mb-14 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="/create"
            className="rounded-full bg-pink-300 px-8 py-4 text-lg font-bold text-white shadow-md transition hover:scale-105 hover:bg-pink-400"
          >
            献立を作る
          </a>

          <a
            href="/saved"
            className="rounded-full px-8 py-4 text-lg font-bold text-gray-700 shadow-md transition hover:scale-105"
            style={{ backgroundColor: "#d8f3dc" }}
          >
            保存した献立を見る
          </a>
        </div>

        <div className="grid w-full max-w-4xl gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="mb-3 text-3xl">①</div>
            <h2 className="mb-2 text-lg font-bold text-gray-800">
              条件を入れる
            </h2>
            <p className="text-sm leading-6 text-gray-600">
              家族人数、調理時間、予算感などを選ぶだけ。
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="mb-3 text-3xl">②</div>
            <h2 className="mb-2 text-lg font-bold text-gray-800">
              献立候補を見る
            </h2>
            <p className="text-sm leading-6 text-gray-600">
              主菜・副菜・汁物を含んだ献立候補をまとめて確認できます。
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="mb-3 text-3xl">③</div>
            <h2 className="mb-2 text-lg font-bold text-gray-800">
              気に入った案を保存
            </h2>
            <p className="text-sm leading-6 text-gray-600">
              あとで見返せるように、お気に入りとして保存できます。
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}