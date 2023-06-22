import styles from "./Banner.module.css";
export default function Banner() {
  return (
    <section>
      <div>
        <p className={styles.banner_heading}>
          <small>Cario</small>
          <br />
        </p>
        <small className={styles.banner_heading_slogan}>
          New cars with the most affordable prices
        </small>
        <div className={styles.banner_container + " w-100 "}>
          <img
            className={styles.banner}
            src="https://www.ford.co.uk/content/dam/guxeu/uk/home/billboard/ford-homepage-uk-FoB_Tactical_Lifestyle_PV_13000Pix_300Dpi_RGB_V2_ccl-16x9-2160x1215-bb-so.jpg.renditions.original.png"
            alt="https://www.carstore.com/-/media/carstore/homepage/carousel-images/april-may-2023/carstore-banner-720x405px.ashx?mh=1440&la=en&h=405&w=720&mw=2560&hash=0DD4DFE1A4FDE99955639858C82D1DC5"
          />
        </div>
      </div>
    </section>
  );
}
