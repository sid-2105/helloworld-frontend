import React from "react";
import "./Gallery.css";
import ImageCarousel from "../Components/Image Carousel/ImageCarousel";
import ProfileCard from "../Components/ProfileCard/ProfileCard";

const images = ['./wksp1.jpg', "./wksp2.jpg", "./wksp3.jpg", "./wksp4.jpg", "./wksp5.jpg", "./wksp6.jpg", "./wksp7.jpg", "./wksp8.jpg",];

const Gallery = () => {
  return (
    <div className="Page">
      <h1>Gallery</h1>
      <div className="carousel">
          <ImageCarousel images={images} />
      </div>
      <h2>Our Head</h2>
      <div className="head">
        <ProfileCard profileType={'Top'} profileImage={'./principal.jpeg'} profileName={'Dr. Prof. HP Shukla'} profileDesignation={'Principal(UCER)'}/>
        <ProfileCard profileType={'Top'} profileImage={'./deansw.jpeg'} profileName={'Dr. Swapnil Srivastava'} profileDesignation={'DEAN - Planning & Development'}/>
        <ProfileCard profileType={'Top'} profileImage={'./dean.jpeg'} profileName={'Dr. Nandita Pradhan'} profileDesignation={'DEAN - Student Welfare'}/>
        <ProfileCard profileType={'Top'} profileImage={'./vd.jpg'} profileName={'Dr. Vijay kr. Dwivedi'} profileDesignation={'HOD(CSE)'}/>
      </div>
      <h2>Our Faculty</h2>
      <div className="faculty">
        <ProfileCard profileType={'Middle'} profileImage={'./prashant.jpeg'} profileName={'Prashant Soni'} profileDesignation={'Competitive Coding'}/>
        <ProfileCard profileType={'Middle'} profileImage={'./rahul.jpeg'} profileName={'Rahul Kesarwani'} profileDesignation={'Web Development'}/>
        <ProfileCard profileType={'Middle'} profileImage={'./pal.png'} profileName={'Pallavi Shukla'} profileDesignation={'AI/ML'}/>
        <ProfileCard profileType={'Middle'} profileImage={'./earth.jpg'} profileName={'Bhanu Rai'} profileDesignation={'App Development'}/>
      </div>
      <h2>Our Team</h2>
      <div className="team">
        <ProfileCard profileType={'Bottom'} profileImage={'./sid.jpg'} profileName={'Siddharth Mishra'} profileDesignation={'President'}/>
        <ProfileCard profileType={'Bottom'} profileImage={'./saumya.jpg'} profileName={'Saumya Singh'} profileDesignation={'Vice-President'}/>
        <ProfileCard profileType={'Bottom'} profileImage={'./uday.jpg'} profileName={'Uday Raj Singh'} profileDesignation={'Treasurer'}/>
        <ProfileCard profileType={'Bottom'} profileImage={'./jadu.jpg'} profileName={'Vaibhav Pandey'} profileDesignation={'Secretary'}/>
        <ProfileCard profileType={'Bottom'} profileImage={'./vedant.jpg'} profileName={'Vedant Mishra'} profileDesignation={'Technical Lead'}/>
        <ProfileCard profileType={'Bottom'} profileImage={'./anshika.jpg'} profileName={'Anshika'} profileDesignation={'Event Coordinator'}/>
      </div>
    </div>
  );
};

export default Gallery;
