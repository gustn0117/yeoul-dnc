/* 데이터 문자열의 **…** 구간을 강조색(파랑) 굵은 글씨로 렌더링 */
export default function Emph({ text }: { text: string }) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-bold text-accent">
            {part}
          </strong>
        ) : (
          part
        ),
      )}
    </>
  );
}
