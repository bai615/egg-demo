<html>
<head>
    <title>Hacker News</title>
    <link rel="stylesheet" href="/public/css/news.css"/>
</head>
<body>
<ul class="news-view view">
    {% for item in list %}
    <li class="time">
        <a href="{{ item.url }}">{{item.title}}</a>
         --- {{ helper.relativeTime(item.time) }} --- {{ item.time }}
    </li>
    {% endfor %}
</ul>
</body>
</html>