import React, { useState, useEffect } from "react";

const NewMemberForm = props => {
  const [member, setMember] = useState({
    name: props.member.name,
    role: props.member.role,
    mobile: props.member.mobile,
    email: props.member.email,
    photo: props.member.photo,
    rent: props.member.rent
  });

  useEffect(() => {
    setMember({
      name: props.member.name,
      role: props.member.role,
      mobile: props.member.mobile,
      email: props.member.email,
      photo: props.member.photo,
      rent: props.member.rent
    });
  }, [
    props.member.email,
    props.member.mobile,
    props.member.name,
    props.member.photo,
    props.member.rent,
    props.member.role
  ]);

  const handleChange = name => event => {
    setMember({ ...member, [name]: event.target.value });
  };

  return (
    <form>
      <label for="name">Name</label>
      <input
        id="name"
        type="text"
        value={member.name}
        onChange={handleChange("name")}
      ></input>
      <br />
      <label for="role">Role</label>
      <input
        id="role"
        type="text"
        value={member.role}
        onChange={handleChange("role")}
      ></input>
      <br />
      <label for="mobile">Mobile</label>
      <input
        id="mobile"
        type="text"
        value={member.mobile}
        onChange={handleChange("mobile")}
      ></input>
      <br />
      <label for="email">Email</label>
      <input
        id="email"
        type="text"
        value={member.email}
        onChange={handleChange("email")}
      ></input>
      <br />
      <label for="profile">Profile Photo</label>
      <input
        id="profile"
        type="text"
        value={member.photo}
        onChange={handleChange("photo")}
      ></input>
      <br />
      <label for="rent">Rent</label>
      <input
        id="rent"
        type="text"
        value={member.rent}
        onChange={handleChange("rent")}
      ></input>
    </form>
  );
};

export default NewMemberForm;