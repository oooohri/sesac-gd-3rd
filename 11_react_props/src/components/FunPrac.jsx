import img from "../asset/best.jpg";

export default function PraProps2(props) {
  const { title, author, price, type } = props;
  return (
    <>
      <h1>실습 2</h1>
      <div className="intro">이번주 베스트셀러</div>
      <div className="imgContainer">
        <img src={img} alt="베스트셀러" className="img" />
      </div>
      <div className="title">{title} </div>
      <div className="author">저자 : {author} </div>
      <div className="price">가격 : {price}원 </div>
      <div className="type">구분 : {type} </div>
    </>
  );
}
