const API = 'http://localhost:5006/users';

export const usersService = async () => {
  try {
    const response = await fetch(API);
    if (!response.ok) {
      throw new Error('Failed to fetch tours data!');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.log((error as Error).message);
  }
};



  //   // <div className="categories container">
  //   //   <Navbar/>
  //   //   <div className="categories-title">Mashhur sayohatlar</div>

  //   //   {catLoad ? (
  //   //     <Oval visible={true} height="30" width="30" color="#252525" ariaLabel="oval-loading" wrapperClass="loader" />
  //   //   ) : catErr ? (
  //   //     <p className="error">{catErr}</p>
  //   //   ) : categoriesData && (
  //   //     <div className="items">
  //   //       <div
  //   //         onClick={() => handleFilteredTour("all")}
  //   //         className={`name ${active === "all" ? "active" : ""}`}
  //   //       >
  //   //         Barchasi
  //   //       </div>

  //   //       {categoriesData.map((category) => (
  //   //         <div
  //   //           onClick={() => handleFilteredTour(category.id)}
  //   //           key={category.id}
  //   //           className={`name ${active === String(category.id) ? "active" : ""}`}
  //   //         >
  //   //           {category.name}
  //   //           <div className="description">{category.description}</div>
  //   //         </div>
  //   //       ))}
  //   //     </div>
  //   //   )}

  //   //   <div className="tours container">
  //   //     {tourLoad ? (
  //   //       <Oval visible={true} height="30" width="30" color="#252525" ariaLabel="oval-loading" wrapperClass="loader" />
  //   //     ) : tourErr ? (
  //   //       <p className="error">{tourErr}</p>
  //   //     ) : filteredTour && filteredTour.length > 0 ? (
  //   //       <div className="tours">
  //   //         {filteredTour.map(({ id, background_image, pack_includes, rating, name, price }) => (
  //   //           <div key={id} className="tour">
  //   //             <img src={background_image || "/fallback-image.jpg"} alt={name} />
  //   //             <div className="name">{name}</div>
  //   //             <div className="info">
  //   //               <div className="rating">{rating}</div>
  //   //               <div className="price">{price} $</div>
  //   //               <ul className="pack-includes">
  //   //                 {JSON.parse(pack_includes).map((pack: string, index: number) => (
  //   //                   <li key={index}>{pack}</li>
  //   //                 ))}
  //   //               </ul>
  //   //               <button onClick={() => navigate(`/tour/${id}`)}>Batafsil</button>
  //   //             </div>
  //   //           </div>
  //   //         ))}
  //   //       </div>
  //   //     ) : (
  //   //       <p>Ma'lumot mavjud emas</p>
  //   //     )}
  //   //   </div>
  //   // </div>