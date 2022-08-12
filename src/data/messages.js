import moment from 'moment';

export default [
    {
        subject: 'Bill amet, consectetur adipiscing elit',
        content: `
            <p>Hello,</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus viverra accumsan in nisl. Dui ut ornare lectus sit amet est placerat in. Accumsan sit amet nulla facilisi morbi. Netus et malesuada fames ac turpis egestas integer. Commodo nulla facilisi nullam vehicula ipsum. Dui ut ornare lectus sit amet est placerat in. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Magnis dis parturient montes nascetur. Odio euismod lacinia at quis risus sed vulputate. Tristique magna sit amet purus gravida quis blandit. Dui id ornare arcu odio ut. Sed faucibus turpis in eu mi bibendum neque. Cras sed felis eget velit. Nibh mauris cursus mattis molestie a. Turpis tincidunt id aliquet risus feugiat. Morbi blandit cursus risus at ultrices. Pretium viverra suspendisse potenti nullam ac tortor vitae purus. Et odio pellentesque diam volutpat commodo sed.</p>
            <p><a href="#">markbrown.com</a></p>
        `,
        isImportant: false,
        isDeleted: false,
        isRead: false,
        type: 'incoming',
        date: moment().subtract(10, 'minutes'),
        from: {
            name: 'markbrown.com',
            email: 'markbrown4@gmail.com'
        },
        attachments: []
    },
    {
        subject: 'ut labore et dolore magnal',
        content: `
            <p>Hello Bo,</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus viverra accumsan in nisl. Dui ut ornare lectus sit amet est placerat in. Accumsan sit amet nulla facilisi morbi. Netus et malesuada fames ac turpis egestas integer. Commodo nulla facilisi nullam vehicula ipsum. Dui ut ornare lectus sit amet est placerat in. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Magnis dis parturient montes nascetur. Odio euismod lacinia at quis risus sed vulputate. Tristique magna sit amet purus gravida quis blandit. Dui id ornare arcu odio ut. Sed faucibus turpis in eu mi bibendum neque. Cras sed felis eget velit. Nibh mauris cursus mattis molestie a. Turpis tincidunt id aliquet risus feugiat. Morbi blandit cursus risus at ultrices. Pretium viverra suspendisse potenti nullam ac tortor vitae purus. Et odio pellentesque diam volutpat commodo sed.</p>
        `,
        isImportant: false,
        isDeleted: false,
        isRead: false,
        type: 'incoming',
        date: moment().subtract(30, 'minutes'),
        from: {
            name: 'Beatrix',
            email: 'blackmamba@gmail.com'
        },
        attachments: []
    },
    {
        subject: 'sed do eiusmod tempor incididunt',
        content: `
            <p>Hello Bo</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus viverra accumsan in nisl. Dui ut ornare lectus sit amet est placerat in. Accumsan sit amet nulla facilisi morbi. Netus et malesuada fames ac turpis egestas integer. Commodo nulla facilisi nullam vehicula ipsum. Dui ut ornare lectus sit amet est placerat in. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Magnis dis parturient montes nascetur. Odio euismod lacinia at quis risus sed vulputate. Tristique magna sit amet purus gravida quis blandit. Dui id ornare arcu odio ut. Sed faucibus turpis in eu mi bibendum neque. Cras sed felis eget velit. Nibh mauris cursus mattis molestie a. Turpis tincidunt id aliquet risus feugiat. Morbi blandit cursus risus at ultrices. Pretium viverra suspendisse potenti nullam ac tortor vitae purus. Et odio pellentesque diam volutpat commodo sed.</p>
        `,
        isImportant: true,
        isDeleted: false,
        isRead: true,
        type: 'incoming',
        date: moment().subtract(75, 'minutes'),
        from: {
            name: 'Mark Brown',
            email: 'markbrown4@gmail.com'
        },
        attachments: []
    },
    
    
    {
        subject: 'Thank you for your purchase',
        content: `
            <p>Thank you!</p>
            <p>We have received your payment, and your products are on the way!</p>
            <p>Order ID: ABCD1234</p>
        `,
        isImportant: false,
        isDeleted: false,
        isRead: true,
        type: 'incoming',
        date: moment().subtract(2, 'weeks'),
        from: {
            name: 'Flipkart',
            email: 'orders@flipkart.com'
        },
        attachments: [
            {
                fileName: 'order.pdf',
                size: 2000000
            }
        ]
    },
    {
        subject: 'You must have big rats if you need Hattori',
        content: `
            <p>Hello,</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus viverra accumsan in nisl. Dui ut ornare lectus sit amet est placerat in. Accumsan sit amet nulla facilisi morbi. Netus et malesuada fames ac turpis egestas integer. Commodo nulla facilisi nullam vehicula ipsum. Dui ut ornare lectus sit amet est placerat in. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Magnis dis parturient montes nascetur. Odio euismod lacinia at quis risus sed vulputate. Tristique magna sit amet purus gravida quis blandit. Dui id ornare arcu odio ut. Sed faucibus turpis in eu mi bibendum neque. Cras sed felis eget velit. Nibh mauris cursus mattis molestie a. Turpis tincidunt id aliquet risus feugiat. Morbi blandit cursus risus at ultrices. Pretium viverra suspendisse potenti nullam ac tortor vitae purus. Et odio pellentesque diam volutpat commodo sed.</p>
            
        `,
        isImportant: false,
        isDeleted: true,
        isRead: false,
        type: 'incoming',
        date: moment().subtract(3, 'months'),
        from: {
            name: 'Myspam.',
            email: 'Hello@spam.com'
        },
        attachments: []
    },
    {
        subject: 'I want to buy your guitar',
        content: `
            <p>Hey there!</p>
            <p>I saw that you have a guitar on sale. I never played an instrument, but I figured I'd be super good at it.</p>
            <p>Even though I know it's extremely annoying, I'm just going to ask "how much?"</p>
            <p>Let me know!</p>
        `,
        isDeleted: false,
        type: 'outgoing',
        date: moment().subtract(4, 'months'),
        from: {
           
            email: 'sushir@gmial.com'
        },
        attachments: []
    },
    {
        subject: 'Wrong Delivery',
        content: `
            <p>Hey,</p>
            <p>I ordered a pizza from you guys yesterday. I ordered a vegetarian one, but you delivered a meat lover's pizza.</p>
            <p>I only noticed this half way through eating it, so obviously I am quite upset about that.</p>
            <p>Please deliver a new pizza tonight, but this time a vegetarian one, but with bacon.</p>
            <p>Regards,</p>
            <p>An Angry Customer</p>
        `,
        isDeleted: false,
        type: 'outgoing',
        date: moment().subtract(6, 'months'),
        from: {
            name: 'dominos',
            email: 'people@gmial.com'
        },
        attachments: []
    },
    {
        subject: 'Your video is live!',
        content: `
            <p>Hey Coding Explained,</p>
            <p>Your video titled "Why Vue.js is Awesome" is now live on YouTube!</p>
            <p>You can find it here: <a href="#">https://youtu.be/watch?v=hg23hgls</a></p>
        `,
        isImportant: false,
        isDeleted: false,
        isRead: true,
        type: 'incoming',
        date: moment().subtract(8, 'months'),
        from: {
            name: 'YouTube',
            email: 'video@youtube.com'
        },
        attachments: []
    },
    
    {
        subject: 'Thank you for your purchase',
        content: `
            <p>Thank you for your purchase at SoundGear.com</p>
            <p>You bought the following item:</p>
            <ul>
                <li>Cloud Cloudlifter CL-1 ($199)</li>
            </ul>
        `,
        isImportant: false,
        isDeleted: false,
        isRead: true,
        type: 'incoming',
        date: moment().subtract(10, 'months'),
        from: {
            name: 'SoundGear.com',
            email: 'orders@soundgear.com'
        },
        attachments: [
            {
                fileName: 'order-confirmation.pdf',
                size: 2540000
            }
        ]
    }
];