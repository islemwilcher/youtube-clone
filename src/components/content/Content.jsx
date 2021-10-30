
import { Card, CardMedia, Typography } from '@material-ui/core';
import useStyles from './styles'

const Content = () => {
    const classes = useStyles()
    const posts = [
        {
        image: 'https://images.unsplash.com/photo-1633114128814-11fac33f707b?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        author: 'islem wilcher',
        title: 'setup',
        views: '332k',
        date: '2 days ago'
        },
        {
        image: 'https://images.unsplash.com/photo-1635519514646-812c22da4ce1?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        author: 'jhon deo',
        title: 'python',
        views: '80k',
        date: '11 months ago'
        },
        {
        image: 'https://images.unsplash.com/photo-1635528047872-06f167fd5d8f?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        author: 'delila',
        title: 'what if',
        views: '120',
        date: '3 months ago'
        },
    ]
    return (
        <div className={classes.content}>
            {posts.map((post) => (
                <Card className={classes.card} raised elevation={3} >
                    <CardMedia className={classes.media} image={post.image} />
                    <div className={classes.details}>
                        <Typography className={classes.title} gutterBottom variant="h4" component="h2">{post.title}</Typography>
                        <Typography className={classes.creator} color="textSecondary" variant="h6">{post.author}</Typography>
                        <Typography variant="h6" color="textSecondary" component="h2">{post.views} - {post.date}</Typography>
                    </div>
                </Card>
            ))}
        </div>
    )
}

export default Content
