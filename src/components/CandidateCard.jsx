import styles from "./CandidateCard.module.css";

function CandidateCard({data}) {
  return (
    <div data-testid="candidate-container" className={styles.container}>
      <img src={data.avatar}alt="logo" width="100px" height="100px" />
      <div>
        <div>Name: {data.name}</div>
        <div>{data.title},{data.company_name}</div>
      </div>
      <div>${data.salary}</div>
    </div>
  );
}

export default CandidateCard;
