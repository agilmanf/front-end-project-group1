import "./HomePage.css";
import { useDispatch } from "react-redux";
import { addBookToMyLibrary } from "../../redux/actions/UserAction";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

function Bookoftheday() {
  const data = {
    id: "HkBlDwAAQBAJ",
    judul: "Dasar Logika Pemrograman Komputer",
    cover:
      "http://books.google.com/books/content?id=HkBlDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    penulis: ["Abdul Kadir"],
    date: "2017-12-27",
    penerbit: "Elex Media Komputindo",
    sinopsis:
      "Buku yang sangat cocok untuk Anda yang sedang mempelajari dasar pemrograman komputer. Buku ini mengajarkan logika untuk menyelesaikan berbagai masalah yang ditangani oleh komputer dengan menggunakan Flowgorithm. Dengan menggunakan perangkat lunak ini, berbagai permasalahan komputasi dapat diselesaikan dengan menyusun diagram alir. Kemudian, Anda bisa mengujinya untuk memastikan bahwa solusi yang Anda buat memang sudah sesuai atau tidak, tanpa perlu melibatkan orang lain.",
    readlink:
      "http://books.google.co.id/books?id=HkBlDwAAQBAJ&printsec=frontcover&dq=intitle:pemrograman&hl=&cd=1&source=gbs_api",
  };

  const regex = /id=.*/g;
  const url = regex.exec(data.readlink)[0];

  //untuk kirim data user
  const user = useSelector((state) => state.userReducer);
  const userID = user.id || 0;

  const dispatch = useDispatch();

  return (
    <>
      <div className="Bookoftheday mt-3">
        <div className="container">
          <div className="container">
            <div className="col-xl-4 offset-xl-4 col-lg-5 offset-lg-4 col-md-8 mt-3 col-sm-8 offset-sm-3">
              <h1>Books Of The Day</h1>
            </div>
          </div>
          <div className="row">
            <div className="d-flex justify-content-center col-xl-3 offset-xl-0 col-lg-3 offset-lg-0 col-md-3 offset-md-0 col-sm-8 offset-sm-2">
              <img src={data.cover} alt="" />
            </div>
            <div className="col-xl-9 offset-xl-0 col-lg-9 offset-lg-0 col-md-9 offset-md-0 col-sm-12 offset-sm-0 mt-sm-3">
              <h5>{data.judul}</h5>
              <h6>{data.penulis} ({data.date})</h6>
              <p>{data.sinopsis}</p>

              <button
                type="button"
                className="btn btn-dark"
                onClick={() => dispatch(addBookToMyLibrary(data))}
              >
                Simpan Baca Nanti
              </button>
              <a href={`/book/${url}/${userID}`}>
                <Button className="ms-2" variant="success">
                  Read Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bookoftheday;
