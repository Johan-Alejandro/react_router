const Home = () => {
  return (
    <>
      <div className="homepage">
        <h1>Bienvenidos a Happy Cake</h1>
        <p>El lugar de los pasteles felices...</p>
        <div className="Gallery">
          <img
            src="https://s3.weddbook.com/t4/2/7/4/2745498/soccer-birthday-cake.jpg"
            alt="pastele"
            className="img-fluid"
          />
          <img
            src="https://i.pinimg.com/originals/aa/f9/a8/aaf9a876b53818660f446625bb972285.jpg"
            alt="cake"
            className="img-fluid"
          />
          <img
            src="https://2.bp.blogspot.com/-hU0qy6xJ-gE/UzdOrXg2wCI/AAAAAAAAB_s/Yr2td_1RcEU/s1600/chocolate-pastel-ni%C3%B1os.jpg"
            alt="pastel"
            className="img-fluid"
          />
        </div>
      </div>
    </>
  );
};
export default Home;
