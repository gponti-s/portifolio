import app from '.';
import dotenv from 'dotenv';


dotenv.config();

const port = process.env.PORT || 5001;

// Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
