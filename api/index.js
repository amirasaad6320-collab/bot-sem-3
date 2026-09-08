const { Telegraf, Markup } = require('telegraf');

// التوكن هيتسحب أوتوماتيك من إعدادات Vercel
const bot = new Telegraf(process.env.BOT_TOKEN);

const mainMenuKeyboard = Markup.keyboard([
    ['📝 Midterms', '🔥 Finals'],
    ['⚡️ Revisions', '✍️ Quizzes'],
    [' anatomy jars slides', '🎥 Videos']
]).resize();

bot.start((ctx) => {
    ctx.reply('Welcome message. Choose what you need:', mainMenuKeyboard);
});
 
bot.hears('⬅️ Main Menu', (ctx) => {
    ctx.reply('Main Menu:', mainMenuKeyboard);
});

bot.hears('📝 Midterms', (ctx) => {
    ctx.reply('📝 **Midterms Section**', Markup.keyboard([['Mid 1 2029', 'Mid 2 2029', 'past patches'], ['⬅️ Main Menu']]).resize());
});

bot.hears('Mid 1 2029', async (ctx) => {
    await ctx.replyWithDocument('BQACAgQAAxkBAAMIap9CiIyeCNJU4WmkuYNHrC-jwu4AAhseAAJByrhTLTyoIXKL1gc9BA'); 
});

bot.hears('Mid 2 2029', async (ctx) => {
    await ctx.replyWithDocument('BQACAgQAAxkBAAMKap9C1sILzgNRDn3Nsgp_Svg1NzAAApodAALdSyhRB_N2hNEgp509BA'); 
});

bot.hears('past patches', async (ctx) => {
    await ctx.replyWithMediaGroup([
        { type: 'document', media: 'BQACAgQAAxkBAAMFap9CWGXNU34Zba9orOcssr62uyQAApMhAALrr7lQtqpnIHwnUds9BA' },
        { type: 'document', media: 'BQACAgQAAxkBAAMoap9VHJ2-2QmLFZVH_Plsu9URyIIAAl8jAAJS05BTu1iyP7NKFe09BA' },
        { type: 'document', media: 'BQACAgQAAxkBAAMEap9CWCBXSqp-11EQvpn4xWDlJ2MAApIhAALrr7lQJUeBmS5KA449BA' }
    ]);
});

bot.hears('🔥 Finals', (ctx) => {
    ctx.reply('🔥 **Finals Section**', Markup.keyboard([['MCQ 📋', 'Essay 📝'], ['OSPE 🔬', 'Skills 🩺'], ['⬅️ Main Menu']]).resize());
});

bot.hears('MCQ 📋', (ctx) => {
    ctx.reply('MCQ Section', Markup.keyboard([ ['2029'], ['2027', '2026'], ['anatomy', '⬅️ Main Menu']]).resize());
});

bot.hears('2029', async (ctx) => {
    await ctx.replyWithDocument('BQACAgQAAxkBAAM6aqB-nHYV0-mMCnKkywWVAAHN2Ap-AAJDHAACtqXpUj6aUy7cNEnOPQQ'); 
});

bot.hears('2027', async (ctx) => {
    await ctx.replyWithDocument('BQACAgQAAxkBAAMqap9VbadbxKMSAmP7ejae5AhtGIMAApEhAALrr7lQav5VMeqd3CE9BA'); 
});

bot.hears('2026', async (ctx) => {
    await ctx.replyWithDocument('BQACAgQAAxkBAAMsap9VdO7vg5CBD7D5CbHK7AhqK1kAApUhAALrr7lQy4uGyBmIjPk9BA'); 
});

bot.hears('anatomy', async (ctx) => {
    await ctx.replyWithDocument('BQACAgQAAxkBAAMuap9VhA5oh0C1SMA0z-yQwMt3xlcAApQhAALrr7lQiKH9I5iA3TY9BA'); 
});

bot.hears('Essay 📝', async (ctx) => {
    ctx.reply('Essay Section', Markup.keyboard([ ['2029 essay','2028 essay'], ['cases','2027 essay'], [ '⬅️ Main Menu']]).resize());
});

bot.hears('2029 essay', async (ctx) => {
    await ctx.replyWithMediaGroup([
        { type: 'document', media: 'BQACAgQAAxkBAANGaqCAxlFIWIcSLOQmFt46uogHzjkAAs0eAAJf5QlR4wsLkn6Ojvk9BA' }
    ]);
});

bot.hears('2028 essay', async (ctx) => {
    await ctx.replyWithMediaGroup([
        { type: 'document', media: 'BQACAgQAAxkBAANEaqCALwJRx7KoZfrJiz80uhsFji0AAsYeAAJf5QlRGvIQaWofenw9BA' },
        { type: 'document', media: 'BQACAgQAAxkBAAM-aqB_6KGVizN67HzTl6aW2wEgFzwAAkIcAAK2pelSH_WnJJ1d9YE9BA' }
    ]);
});

bot.hears('2027 essay', async (ctx) => {
    await ctx.replyWithMediaGroup([
        { type: 'document', media: 'BQACAgQAAxkBAAMwap-Cdf1z6uJ-bbt_55AHGcbKDaYAAl8YAAJv5phSm-iVKqoriVk9BA' },
        { type: 'document', media: 'BQACAgQAAxkBAAMxap-CdZPHP4nsot44ucQaoeXtJT4AAl8aAAJD_rBSsBj8fPta6yw9BA' }
    ]);
});

bot.hears('cases', async (ctx) => {
    await ctx.replyWithMediaGroup([
        { type: 'document', media: 'BQACAgQAAxkBAAM8aqB_xZjVDY5Ny6cGnasutS-RPg4AAmQdAAK2peFSE8i8HllMpZc9BA' },
        { type: 'document', media: 'BQACAgQAAxkBAANAaqB_-aV7trOVVe5WnHjSII0BFVEAAkAcAAK2pelSjE09AryaGWM9BA' }
    ]);
});

bot.hears('Skills 🩺', async (ctx) => {
    ctx.reply('Skills Section', Markup.keyboard([['pathology', 'histology'], ['⬅️ Main Menu']]).resize());
});

bot.hears('histology', async (ctx) => {
    await ctx.replyWithDocument('BQACAgQAAxkBAANMaqCCH1obL1ltj9FEmIppoDZdxI4AAmMbAAJ8sEFTgCfOFFCxDaA9BA'); 
});

bot.hears('pathology', async (ctx) => {
    await ctx.replyWithDocument('BQACAgQAAxkBAANNaqCCH6NAg-7fcne3Ehxk_6RzNm0AAmUbAAJ8sEFTwwJxopwoFzs9BA'); 
});

bot.hears('OSPE 🔬', async (ctx) => {
    ctx.reply('OSPE Section', Markup.keyboard([ ['2028 OSPE','pathology'],['⬅️ Main Menu']]).resize());
});

bot.hears('2028 OSPE', async (ctx) => {
    await ctx.replyWithDocument('BQACAgQAAxkBAANKaqCBzfWZ2kW6U9XUNL-LUzHcw6MAAkEcAAK2pelSz6RkWdkw8x89BA'); 
});

bot.hears('⚡️ Revisions', (ctx) => {
    ctx.reply('⚡️ **Revisions Section**', Markup.keyboard([['physiology', 'skills,ospe'], ['biochemistry','⬅️ Main Menu']]).resize());
});

bot.hears('physiology', async (ctx) => {
    ctx.reply( 'https://youtu.be/MMAO7j1Ymxs?si=6TzMF_u-7PQ9KlfF' );
});

bot.hears('biochemistry', async (ctx) => {
    ctx.reply( 'https://drive.google.com/file/d/17GN-jHTmpQzsd3T9XLJxn4sPvFWGPNRm/view?usp=sharing' );
});

bot.hears('skills,ospe', async (ctx) => {
    ctx.reply( 'https://youtu.be/yHJXEWMRazc' );
});

bot.hears('✍️ Quizzes', async (ctx) => {
    await ctx.replyWithDocument('BQACAgQAAxkBAAMCap9BO1iWkdz3MNAds6adedPVoz0AAuAaAAJ7oCFSb5_xkjqeTRE9BA'); 
});

bot.hears('🎥 Videos', (ctx) => {
    ctx.reply('🎥 **Videos Section**', Markup.keyboard([['🔬 Histology Slides', 'glucometer'], ['skin fold','anatomy jars'],['blood sample','⬅️ Main Menu']]).resize());
});
 
bot.hears('glucometer', async (ctx) => {
    await ctx.replyWithMediaGroup([
        { type: 'video', media: 'BAACAgQAAxkBAAMMap9EjGQlHkWDLL5IgOqfZXhOMS8AAhkeAAKTAAExUSqNY-z1bmLmPQQ' },
    ]);
});

bot.hears('skin fold', async (ctx) => {
    await ctx.replyWithMediaGroup([
        { type: 'video', media: 'BAACAgQAAxkBAAMOap9EpGUgeZPtHLG_Mg4qAxsk1TQAAiwbAALjy8lTu9qQC6tMqhQ9BA' },
    ]);
});

bot.hears('blood sample', async (ctx) => {
    await ctx.replyWithMediaGroup([
        { type: 'video', media: 'BAACAgQAAxkBAAMQap9Eq_wrHv7wEa7kiB803r5XK1MAAvwbAAKkT6BSg2W0XVBqjBE9BA' },
    ]);
});

bot.hears('🔬 Histology Slides', async (ctx) => {
    await ctx.replyWithMediaGroup([
        { type: 'video', media: 'CgACAgQAAxkBAAMSap9Ev91r0WiVq9WGBVcaM6r-SfQAAt4eAAL292lT7sASiuL1eHk9BA' },
        { type: 'video', media: 'CgACAgQAAxkBAAMUap9Ev4xw-pFtNdO6tpkjPL1o4tQAAuAeAAL292lTE4j1O0TYohA9BA' },
        { type: 'video', media: 'CgACAgQAAxkBAAMTap9Ev78rjAI6W2d3M3EqW6se6_UAAtseAAL292lTB2tfjOJzX0M9BA' },
        { type: 'video', media: 'CgACAgQAAxkBAAMVap9EvzdaNCTCNj1xcgn7c6yuT3gAAtweAAL292lTFFONlJCZfMU9BA' },
        { type: 'video', media: 'CgACAgQAAxkBAAMWap9Ev-gQQj-yrPUBi1cgbm7sI6gAAt0eAAL292lTk3zRREkP91Y9BA' },
        { type: 'video', media: 'CgACAgQAAxkBAAMXap9Ev8MSkY8nLqrfN1xbbirtjGcAAt8eAAL292lT60En-5aDtBA9BA' },
        { type: 'video', media: 'CgACAgQAAxkBAAMYap9Ev-x8t1qo4nPLXtbV1x4G4UMAAtoeAAL292lTxs2K9BRx9Rk9BA' }
    ]);
});

bot.hears('anatomy jars', async (ctx) => {
    await ctx.replyWithMediaGroup([
        { type: 'video', media: 'BAACAgQAAxkBAAMgap9Q5S90R-Y_63HeT6TrklfmfVkAApYbAAK2uYhSgC-ioHmEeL09BA' },
        { type: 'video', media: 'BAACAgQAAxkBAAMiap9Q5dUZhN7rBps22-m5zFmnUL8AApcbAAK2uYhSs8rJkMfzhKc9BA' },
        { type: 'video', media: 'BAACAgQAAxkBAAMjap9Q5ZkPvVZWKkKgCpWZeNLM6egAApgbAAK2uYhSfIQivs2dcrs9BA' }
    ]);
});

bot.hears('anatomy jars slides', async (ctx) => {
    await ctx.replyWithMediaGroup([
        { type: 'document', media: 'BAACAgQAAxkBAAMgap9Q5S90R-Y_63HeT6TrklfmfVkAApYbAAK2uYhSgC-ioHmEeL09BA' },
        { type: 'document', media: 'BQACAgQAAxkBAAM1aqA-yCEv_eji3HYWLYNqoMIhwtgAAmodAAK2peFS51xqItoFGJE9BA' },
    ]);
});

module.exports = async (req, res) => {
    try {
        if (req.method === 'POST') {
            await bot.handleUpdate(req.body);
        }
        res.status(200).send('Bot is running on Vercel!');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
};
