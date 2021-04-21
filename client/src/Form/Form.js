import React from "react";
// import './styles.css'

const Forms = () => {

  // const handleSubmit = () => {}
  return (
    <div class="row">
    <div class="col-12 col-md-6">
        <div class="card bg-primary shadow-soft text-center border-light">
            <div class="card-header">
                <span class="card-text small"><span class="far fa-calendar-alt mr-2"></span>15 March 2020</span>
            </div>

            <div class="card-body">
                <h3 class="h5 card-title">We partnered up with Google</h3>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <div class="form-group">
    <label for="exampleFormControlTextarea2">Example textarea</label>
    <textarea class="form-control" id="exampleFormControlTextarea2" rows="3"></textarea>
</div>
                <a href="#" class="btn btn-primary btn-sm">Learn More</a>
            </div>
            <div class="card-footer">
                <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="23k followers">
                    <img class="avatar-sm mr-2 img-fluid rounded-circle" src="../../assets/img/team/profile-picture-2.jpg" alt="Moore avatar" /> Jo J. Moore
                </a>
            </div>
        </div>
    </div>
</div>
  );
};

export default Forms;
