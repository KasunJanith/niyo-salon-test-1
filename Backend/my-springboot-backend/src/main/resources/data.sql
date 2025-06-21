INSERT INTO users (username, password, role) VALUES ('admin', 'admin123', 'admin');
INSERT INTO users (username, password, role) VALUES ('staff', 'staff123', 'staff');
INSERT INTO users (username, password, role) VALUES ('customer', 'customer123', 'customer');

INSERT INTO appointments (date, time, user_id) VALUES ('2023-10-01', '10:00', 3);
INSERT INTO appointments (date, time, user_id) VALUES ('2023-10-02', '11:00', 3);
INSERT INTO appointments (date, time, user_id) VALUES ('2023-10-03', '12:00', 2);

INSERT INTO blog_posts (title, content, author_id) VALUES ('First Blog Post', 'This is the content of the first blog post.', 1);
INSERT INTO blog_posts (title, content, author_id) VALUES ('Second Blog Post', 'This is the content of the second blog post.', 1);

INSERT INTO gallery_items (title, description, image_url) VALUES ('First Image', 'Description of the first image.', 'http://example.com/image1.jpg');
INSERT INTO gallery_items (title, description, image_url) VALUES ('Second Image', 'Description of the second image.', 'http://example.com/image2.jpg');