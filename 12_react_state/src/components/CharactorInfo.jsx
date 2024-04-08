export default function CharactorInfo({ charactorData }) {
  // const charactorData = props.charctorData
  // const {charactorData} = props
  return (
    <>
      <div>Name: {charactorData.name}</div>
      <div>Age: {charactorData.age}</div>
      <div>NickName: {charactorData.nickName}</div>
    </>
  );
}
