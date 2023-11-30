import { useState } from "react";

export default function MarketplacePost() {
  const allTags = [
    "Tech",
    "Fashion",
    "Travel",
    "Entertainment",
    "Fitness",
    "Sustainability",
    "Education",
    "Food and Beverages",
    "Blockchain",
    "AI",
    "Security",
  ];
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [tag,setTag]=useState("")
  const [desc,setdesc]=useState("")
  const [equity,setequity]=useState("")
  const [price,setprice]=useState("")
  const [owner,setowner]=useState("")
  const[Tagline,setTagline]=useState("")
  // const submithandler=(e)=>{

  // }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card shrink-0 w-full shadow-2xl bg-base-100">
          <form className="card-body" >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                required
                value={name} onChange={(e)=>{
                  setName(e.target.value)
                }}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Tagline</span>
              </label>
              <input
                type="text"
                placeholder="Tagline"
                className="input input-bordered"
                required
                value={Tagline} onChange={(e)=>{
                  setTagline(e.target.value)}}
              />
            </div>
            <div className="border-2 p-2">
              <div className="h-2 mb-3">Tags</div>
              {allTags.map((tag, index) => (
                <div key={index} className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">{tag}</span>
                    <input
                      type="radio"
                      name={tag}
                      className="radio checked:bg-blue-500"
                      value={tag} onChange={(e)=>{
                        setTag(e.target.value)}}
                    />
                  </label>
                </div>
              ))}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                type="text"
                placeholder="Description"
                className="textarea textarea-bordered"
                required
                value={desc} onChange={(e)=>{
                  setdesc(e.target.value)}}
              ></textarea>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Equity</span>
              </label>
              <input
                type="text"
                placeholder="Equity"
                className="input input-bordered"
                required
                value={equity} onChange={(e)=>{
                  setequity(e.target.value)}}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                placeholder="Price"
                className="input input-bordered"
                required
                value={price} onChange={(e)=>{
                  setprice(e.target.value)}}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Owner</span>
              </label>
              <input
                type="text"
                placeholder="Owner"
                className="input input-bordered"
                required
                value={owner} onChange={(e)=>{
                  setowner(e.target.value)}}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Mail</span>
              </label>
              <input
                type="text"
                placeholder="Mail"
                className="input input-bordered"
                required
                value={email} onChange={(e)=>{
                  setEmail(e.target.value)}}
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
