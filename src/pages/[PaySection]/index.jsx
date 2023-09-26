import { useRouter } from "next/router";
import classes from './PaySection.module.scss';


const PaySectionCourses = () => {
  const router = useRouter();

  const PaySection = router.query.PaySection;

    return (
      <h1 className={classes.pay}>!</h1>
    )
  }
  
  export default PaySectionCourses;