import React, { useState } from "react";
import { Container, Card, Image, Row, Col, Form } from "react-bootstrap";
import profilePic from "../assets/images/s1.jpeg"; 
import image1 from "../assets/images/1.jpeg";
import image2 from "../assets/images/2.jpeg";
import image3 from "../assets/images/3.jpeg";
import "../Styles/Dashboard.css"; 
import { FaHeart, FaRegComment, FaBookmark } from "react-icons/fa";

const Dashboard = () => {
  const [user] = useState({
    fullName: "Eseoghene Olivia",
    username: "____livvy",
    bio: "Frontend Developer | Photographer 📸",
    profilePic: profilePic,
    stats: { posts: 12, followers: 120, following: 80, likes: 300 },
    uploadedImages: [
      { id: 1, src: image1, likes: 50, comments: [] },
      { id: 2, src: image2, likes: 75, comments: [] },
      { id: 3, src: image3, likes: 115, comments: [] },
    ],
  });

  const [images, setImages] = useState(user.uploadedImages);

  // Like function
  const handleLike = (id) => {
    setImages(images.map(img => img.id === id ? { ...img, likes: img.likes + 1 } : img));
  };

  // Comment function
  const handleComment = (id, comment) => {
    setImages(images.map(img => 
      img.id === id ? { ...img, comments: [...img.comments, comment] } : img
    ));
  };

  return (
    <Container className="dashboard-container">
      {/* Profile Section at the top */}
      <div className="profile-header">
        <Image src={user.profilePic} roundedCircle className="profile-pic-lg" />
        <div className="profile-details">
          <h3 className="username">@{user.username}</h3>
          <p className="fullname">{user.fullName}</p>
          <p className="bio">{user.bio}</p>
          <div className="profile-stats">
            <span><strong>{user.stats.posts}</strong> Posts</span>
            <span><strong>{user.stats.followers}</strong> Followers</span>
            <span><strong>{user.stats.following}</strong> Following</span>
          </div>
        </div>
      </div>

      {/* Post Feed */}
      <h4 className="uploads-title">Your Posts</h4>
      <Row className="uploads-grid">
        {images.map((img) => (
          <Col xs={12} sm={6} md={4} key={img.id} className="mb-4">
            <Card className="upload-card">
              <Card.Img variant="top" src={img.src} className="upload-img" />

              {/* Post Actions (Like, Comment, Save) */}
              <Card.Body>
                <div className="post-actions">
                  <FaHeart className="post-icon" onClick={() => handleLike(img.id)} />
                  <span>{img.likes} Likes</span>
                  <FaRegComment className="post-icon" />
                  <span>{img.comments.length} Comments</span>
                  <FaBookmark className="post-icon" />
                </div>

                {/* Comment Input */}
                <Form className="mt-2"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const comment = e.target.comment.value;
                    if (comment) {
                      handleComment(img.id, comment);
                      e.target.reset();
                    }
                  }}
                >
                  <Form.Control type="text" name="comment" placeholder="Add a comment..." />
                </Form>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Dashboard;
