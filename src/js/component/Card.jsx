import React from "react";

const Card = () => {
    return (
        <div className="container-fluid text-center">
            <div className="row row-cols-1 row-cols-md-4 g-4">
                <div className="col">
                    <div className="card h-100">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRroRaJv8WzCd86DlixoyXim_ddl61PtY-krg&s" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Miklo Velka</h5>
                            <p className="card-text">“PODRÉ SER BLANCO POR FUERA, PERO SOY MORENO POR DENTRO, HASTA EL HUESO”</p>
                        </div>
                        <div className="card-footer">
                        <div className="d-grid gap-2 col-6 mx-auto">
                                <button className="btn btn-warning" type="button">Chale</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="https://pbs.twimg.com/profile_images/1629714268/paco4_1__400x400.jpg" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Paco Aguilar</h5>
                            <p className="card-text">“¡LA VIDA ES UN RIESGO, CARNAL!”</p>
                        </div>
                        <div className="card-footer">
                        <div className="d-grid gap-2 col-6 mx-auto">
                                <button className="btn btn-warning" type="button">Chale</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="https://i1.sndcdn.com/artworks-000490223091-u7upjk-t500x500.jpg" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Cruz Candelaria</h5>
                            <p className="card-text">“PUES HAY UNA LATA DE CHING.. TU MADRE EN LA MESA, MEN. POR QUÉ NO TE SIRVES?”</p>
                        </div>
                        <div className="card-footer">
                        <div className="d-grid gap-2 col-6 mx-auto">
                                <button className="btn btn-warning" type="button">Chale</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="https://i.pinimg.com/736x/48/db/81/48db81a21112ec3acaf0c69ea0681066.jpg" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Magic Mike</h5>
                            <p className="card-text">"LA VIDA ES COMO UN JUEGO DE CARTAS CARNAL. DEBES JUGAR CON LA MANO QUE TE TOCÓ"</p>
                        </div>
                        <div className="card-footer">
                            <div className="d-grid gap-2 col-6 mx-auto">
                                <button className="btn btn-warning" type="button">Chale</button>
                            </div>
                           
                        </div>
                        
                    </div>
                    
                </div>
                
            </div>
        </div>
    )

}

export default Card;