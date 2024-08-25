import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

interface ProjectCardProps {
  name: string;
  image: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, image, link }) => {
  return (
    <Card sx={{ maxWidth: 300, maxHeight: 400, background: "#011221" }}>
      <CardActionArea>
        <div className="flex gap-4">
          <Typography gutterBottom variant="h6" component="div" textAlign={'justify'} className="text-[#5565E8] bg-[#011627]">
            {name}
          </Typography>
          <Typography gutterBottom variant="h6" component="div" className="text-[#607B96] bg-[#011627]">
            // project description
          </Typography>
        </div>
        <CardMedia
          component="img"
          image={image}
          alt={name}
          className="h-24"
        />
        <CardContent>
          <Typography variant="h6" color="#607B96">
            Lizards 
          </Typography>
          <a href={link} className="text-white border-inherit rounded-xl h-10 w-1/2 bg-[#011627] text-center flex  items-center">view-project</a>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProjectCard;