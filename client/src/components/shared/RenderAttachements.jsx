import React from 'react'
import { transformImg } from '../../lib/features'
import { FileOpen } from '@mui/icons-material'

const RenderAttachements = ({file, url}) => {
    switch (file) {
        case "image":
            return <img src={transformImg(url, 200)} width={'200px'} height={'200px'} style={{objectFit: 'contain'}}/>
        case "video":
            return <video src={url} controls />
        case "audio":
            return <audio src={url} controls />
        default:
            <FileOpen />
            break;
    }
}

export default RenderAttachements