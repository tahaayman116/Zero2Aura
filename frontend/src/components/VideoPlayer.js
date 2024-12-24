import React from 'react';
import { Box, Paper } from '@mui/material';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ url, thumbnail }) => {
  return (
    <Paper 
      elevation={3}
      sx={{
        position: 'relative',
        paddingTop: '56.25%', // 16:9 Aspect Ratio
        borderRadius: 2,
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      >
        <ReactPlayer
          url={url}
          width="100%"
          height="100%"
          controls={true}
          light={thumbnail}
          playing={false}
          config={{
            file: {
              attributes: {
                controlsList: 'nodownload', // Disable download button
                disablePictureInPicture: true, // Disable picture in picture
              },
            },
          }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        />
      </Box>
    </Paper>
  );
};

export default VideoPlayer;
