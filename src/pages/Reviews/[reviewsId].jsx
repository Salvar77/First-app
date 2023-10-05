import Image from "next/image";
import classes from "./ReviewsPage.module.scss";



const ReviewsPage = () => {
	

	return (
	   <section id='review1' className={classes.galleryMain}>
            <div className={`${classes.content} ${classes.flow}`}>
                <h1 className={classes.title}>Galeria</h1>
                <div className={classes.gridIsh}>
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                        <div key={num} className={classes.col}>
                            <Image 
                                src="/opinion-1.jpg" 
                                alt="opinie"
                                width={500}  // your desired width
                                height={300} // your desired height
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
	);
};

export default ReviewsPage;


