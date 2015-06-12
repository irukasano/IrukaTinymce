/*
	js by
	http://www.tinymce.com/download/plugins_view.php?id=31
	
	images by
	http://zaazu.com/wordpress_plugin.html
 */
tinymce.PluginManager.add('smileys', function (editor, url) {
    var defaultSmileys = [
        [
            { shortcut: ':Wink:', url: url + '/img/000041-medium.gif', title: 'Wink' },
            { shortcut: ':Happy:', url: url + '/img/000042-medium.gif', title: 'Happy' },
            { shortcut: ':Happy-Grin:', url: url + '/img/000043-medium.gif', title: 'Happy-Grin' },
            { shortcut: ':Wink:', url: url + '/img/000044-medium.gif', title: 'Wink' },
            { shortcut: ':Pleasure:', url: url + '/img/000045-medium.gif', title: 'Pleasure' },
            { shortcut: ':Delicious:', url: url + '/img/000046-medium.gif', title: 'Delicious' },
            { shortcut: ':Tounge-Out:', url: url + '/img/000047-medium.gif', title: 'Tounge-Out' },
            { shortcut: ':Delighted:', url: url + '/img/000048-medium.gif', title: 'Delighted' },
            { shortcut: ':Worry:', url: url + '/img/000049-medium.gif', title: 'Worry' },
            { shortcut: ':Overjoy:', url: url + '/img/000050-medium.gif', title: 'Overjoy' }
        ],
        [
            { shortcut: ':Pondering:', url: url + '/img/000051-medium.gif', title: 'Pondering' },
            { shortcut: ':Weary:', url: url + '/img/000052-medium.gif', title: 'Weary' },
            { shortcut: ':Amazed:', url: url + '/img/000054-medium.gif', title: 'Amazed' },
            { shortcut: ':Angry:', url: url + '/img/000057-medium.gif', title: 'Angry' },
            { shortcut: ':Disapproval:', url: url + '/img/000059-medium.gif', title: 'Disapproval' },
            { shortcut: ':Conceited:', url: url + '/img/000060-medium.gif', title: 'Conceited' },
            { shortcut: ':Cry-Out:', url: url + '/img/000061-medium.gif', title: 'Cry-Out' },
            { shortcut: ':I-see-stars:', url: url + '/img/000062-medium.gif', title: 'I-see-stars' },
            { shortcut: ':Tears:', url: url + '/img/000063-medium.gif', title: 'Tears' },
            { shortcut: ':Cry:', url: url + '/img/000064-medium.gif', title: 'Cry' }
        ],
        [
            { shortcut: ':Tired:', url: url + '/img/000065-medium.gif', title: 'Tired' },
            { shortcut: ':Shout:', url: url + '/img/000066-medium.gif', title: 'Shout' },
            { shortcut: ':Sick:', url: url + '/img/000067-medium.gif', title: 'Sick' },
            { shortcut: ':In-Love:', url: url + '/img/000992-medium.gif', title: 'In Love' },
            { shortcut: ':Crazy2:', url: url + '/img/001037-medium.gif', title: 'Crazy' },
            { shortcut: ':Distort:', url: url + '/img/001038-medium.gif', title: 'Distort' },
            { shortcut: ':Star-Struck:', url: url + '/img/000993-medium.gif', title: 'Star Struck' },
            { shortcut: ':Who-s-the-man:', url: url + '/img/000068-medium.gif', title: 'Who-s-the-man' },
            { shortcut: ':Zzzzzz:', url: url + '/img/000069-medium.gif', title: 'Zzzzzz' },
            { shortcut: ':I-m-in-love:', url: url + '/img/000070-medium.gif', title: 'I-m-in-love' }
        ],
        [
            { shortcut: ':Movie-Time:', url: url + '/img/000071-medium.gif', title: 'Movie-Time' },
            { shortcut: ':Sad:', url: url + '/img/000072-medium.gif', title: 'Sad' },
            { shortcut: ':Whistling:', url: url + '/img/000073-medium.gif', title: 'Whistling' },
            { shortcut: ':Approve:', url: url + '/img/000074-medium.gif', title: 'Approve' },
            { shortcut: ':Angel:', url: url + '/img/000076-medium.gif', title: 'Angel' },
            { shortcut: ':The-Incredible-Hulk:', url: url + '/img/000077-medium.gif', title: 'The-Incredible-Hulk' },
            { shortcut: ':Girl-Teasing:', url: url + '/img/000081-medium.gif', title: 'Girl-Teasing' },
            { shortcut: ':Mad:', url: url + '/img/000099-medium.gif', title: 'Mad' },
            { shortcut: ':Heart-Chocolate-Gift:', url: url + '/img/000106-medium.gif', title: 'Heart-Chocolate-Gift' },
            { shortcut: ':All-I-See-is-Love:', url: url + '/img/000108-medium.gif', title: 'All-I-See-is-Love' }
        ],
        [
            { shortcut: ':Love-Gift:', url: url + '/img/000110-medium.gif', title: 'Love-Gift' },
            { shortcut: ':Valentine-s-Day:', url: url + '/img/000113-medium.gif', title: 'Valentine-s-Day' },
            { shortcut: ':Love-Letter:', url: url + '/img/000115-medium.gif', title: 'Love-Letter' },
            { shortcut: ':i-heart-us:', url: url + '/img/000116-medium.gif', title: 'i-heart-us' },
            { shortcut: ':Valentine-Kiss:', url: url + '/img/000117-medium.gif', title: 'Valentine-Kiss' },
            { shortcut: ':Heartbeat:', url: url + '/img/000118-medium.gif', title: 'Heartbeat' },
            { shortcut: ':Heart:', url: url + '/img/000119-medium.gif', title: 'Heart' },
            { shortcut: ':Flowers-for-you:', url: url + '/img/000120-medium.gif', title: 'Flowers-for-you' },
            { shortcut: ':Roses-are-red:', url: url + '/img/000121-medium.gif', title: 'Roses-are-red' },
            { shortcut: ':Valentine-s-Day:', url: url + '/img/000122-medium.gif', title: 'Valentine-s-Day' }
        ],
        [
            { shortcut: ':Be-Mine:', url: url + '/img/000125-medium.gif', title: 'Be-Mine' },
            { shortcut: ':Make-A-Birthday-Wish:', url: url + '/img/000127-medium.gif', title: 'Make-A-Birthday-Wish' },
            { shortcut: ':Happy-Birthday1:', url: url + '/img/000128-medium.gif', title: 'Happy-Birthday' },
            { shortcut: ':Happy-Birthday2:', url: url + '/img/000129-medium.gif', title: 'Happy-Birthday' },
            { shortcut: ':Happy-Birthday3:', url: url + '/img/000130-medium.gif', title: 'Happy-Birthday' },
            { shortcut: ':Devil:', url: url + '/img/000132-medium.gif', title: 'Devil' },
            { shortcut: ':Afraid:', url: url + '/img/000138-medium.gif', title: 'Afraid' },
            { shortcut: ':Hi:', url: url + '/img/000154-medium.gif', title: 'Hi' },
            { shortcut: ':Slam-Dunk:', url: url + '/img/000171-medium.gif', title: 'Slam-Dunk' },
            { shortcut: ':Beer:', url: url + '/img/000175-medium.gif', title: 'Beer' }
        ],
        [
            { shortcut: ':Cool:', url: url + '/img/000177-medium.gif', title: 'Cool' },
            { shortcut: ':Smile:', url: url + '/img/000178-medium.gif', title: 'Smile' },
            { shortcut: ':Devilish:', url: url + '/img/000180-medium.gif', title: 'Devilish' },
            { shortcut: ':Cheers:', url: url + '/img/000183-medium.gif', title: 'Cheers' },
            { shortcut: ':Crazy:', url: url + '/img/000187-medium.gif', title: 'Crazy' },
            { shortcut: ':Beaten-up:', url: url + '/img/000188-medium.gif', title: 'Beaten-up' },
            { shortcut: ':Bully:', url: url + '/img/000195-medium.gif', title: 'Bully' },
            { shortcut: ':Geek:', url: url + '/img/000200-medium.gif', title: 'Geek' },
            { shortcut: ':Geek:', url: url + '/img/000201-medium.gif', title: 'Geek' },
            { shortcut: ':Geek-Girl:', url: url + '/img/000202-medium.gif', title: 'Geek-Girl' }
        ],
        [
            { shortcut: ':Elvis:', url: url + '/img/000203-medium.gif', title: 'Elvis' },
            { shortcut: ':Caveman:', url: url + '/img/000204-medium.gif', title: 'Caveman' },
            { shortcut: ':Woodstock:', url: url + '/img/000209-medium.gif', title: 'Woodstock' },
            { shortcut: ':Hairstylist:', url: url + '/img/000246-medium.gif', title: 'Hairstylist' },
            { shortcut: ':Aerobics:', url: url + '/img/000248-medium.gif', title: 'Aerobics' },
            { shortcut: ':Congratulations:', url: url + '/img/000266-medium.gif', title: 'Congratulations' },
            { shortcut: ':I-Wish:', url: url + '/img/000268-medium.gif', title: 'I-Wish' },
            { shortcut: ':Yes-Sir:', url: url + '/img/000270-medium.gif', title: 'Yes-Sir' },
            { shortcut: ':I-got-an-idea:', url: url + '/img/000274-medium.gif', title: 'I-got-an-idea' },
            { shortcut: ':I-m-Bored:', url: url + '/img/000275-medium.gif', title: 'I-m-Bored' }
        ],
        [
            { shortcut: ':Cry:', url: url + '/img/000276-medium.gif', title: 'Cry' },
            { shortcut: ':Princess:', url: url + '/img/000277-medium.gif', title: 'Princess' },
            { shortcut: ':Angel:', url: url + '/img/000278-medium.gif', title: 'Angel' },
            { shortcut: ':THANK-YOU:', url: url + '/img/000280-medium.gif', title: 'THANK-YOU' },
            { shortcut: ':Bye:', url: url + '/img/000291-medium.gif', title: 'Bye' },
            { shortcut: ':Birthday-Boy:', url: url + '/img/000292-medium.gif', title: 'Birthday-Boy' },
            { shortcut: ':Afraid:', url: url + '/img/000293-medium.gif', title: 'Afraid' },
            { shortcut: ':Daze:', url: url + '/img/000296-medium.gif', title: 'Daze' },
            { shortcut: ':New-Arrival--Baby-Boy:', url: url + '/img/000301-medium.gif', title: 'New-Arrival--Baby-Boy' },
            { shortcut: ':Congratulations--Baby-Girl:', url: url + '/img/000302-medium.gif', title: 'Congratulations--Baby-Girl' }
        ],
        [
            { shortcut: ':Hello:', url: url + '/img/000317-medium.gif', title: 'Hello' },
            { shortcut: ':Please:', url: url + '/img/000319-medium.gif', title: 'Please' },
            { shortcut: ':Please:', url: url + '/img/000320-medium.gif', title: 'Please' },
            { shortcut: ':You-re-HOT:', url: url + '/img/000321-medium.gif', title: 'You-re-HOT' },
            { shortcut: ':Cool:', url: url + '/img/000322-medium.gif', title: 'Cool' },
            { shortcut: ':In-pain:', url: url + '/img/000336-medium.gif', title: 'In-pain' },
            { shortcut: ':Thinking:', url: url + '/img/000339-medium.gif', title: 'Thinking' },
            { shortcut: ':Tounge-Out:', url: url + '/img/000343-medium.gif', title: 'Tounge-Out' },
            { shortcut: ':Ssshh:', url: url + '/img/000358-medium.gif', title: 'Ssshh' },
            { shortcut: ':Liar:', url: url + '/img/000361-medium.gif', title: 'Liar' }
        ],
        [
            { shortcut: ':Happy-Grin:', url: url + '/img/000986-medium.gif', title: 'Happy-Grin' },
            { shortcut: ':Crazy-Tounge:', url: url + '/img/000987-medium.gif', title: 'Crazy-Tounge' },
            { shortcut: ':Censored:', url: url + '/img/000988-medium.gif', title: 'Censored' },
            { shortcut: ':Crying:', url: url + '/img/000990-medium.gif', title: 'Crying' },
            { shortcut: ':Luigi:', url: url + '/img/001093-medium.gif', title: 'Luigi Super Mario Bros' },
            { shortcut: ':Mario:', url: url + '/img/001092-medium.gif', title: 'Mario Super Mario Bros' },
            { shortcut: ':Optimus-Prime:', url: url + '/img/001088-medium.gif', title: 'Optimus Prime' },
            { shortcut: ':Megatron:', url: url + '/img/001089-medium.gif', title: 'Megatron' },
            { shortcut: ':Police:', url: url + '/img/001085-medium.gif', title: 'Police' },
            { shortcut: ':Felon:', url: url + '/img/001086-medium.gif', title: 'Felon' }
        ],
        [
            { shortcut: ':Green-Lantern:', url: url + '/img/001057-medium.gif', title: 'Green Lantern Smiley' },
            { shortcut: ':Jack-Sparrow:', url: url + '/img/001049-medium.gif', title: 'Jack Sparrow' },
            { shortcut: ':iPhone:', url: url + '/img/001191-medium.gif', title: 'iPhone' },
            { shortcut: ':iPad:', url: url + '/img/001192-medium.gif', title: 'iPad' },
            { shortcut: ':Doctor:', url: url + '/img/001099-medium.gif', title: 'Doctor' },
            { shortcut: ':Sad-Lonely:', url: url + '/img/001036-medium.gif', title: 'Sad&Lonely' },
            { shortcut: ':Crazy-Mad:', url: url + '/img/001037-medium.gif', title: 'Crazy' },
            { shortcut: ':Be-Happy:', url: url + '/img/001039-medium.gif', title: 'Be Happy' },
            { shortcut: ':Superman:', url: url + '/img/001040-medium.gif', title: 'Superman' }
        ]
    ];

    var smileys = editor.settings.smileys || defaultSmileys, fullSmileysList = editor.settings.extended_smileys ? smileys.concat(editor.settings.extended_smileys) : smileys;

    function getHtml() {
        var smileysHtml;

        smileysHtml = '<table role="presentation" class="mce-grid">';

        tinymce.each(fullSmileysList, function (row) {
            smileysHtml += '<tr>';

            tinymce.each(row, function (icon) {
                smileysHtml += '<td><a href="#" data-mce-url="' + icon.url + '" tabindex="-1" title="' + icon.title + '"><img src="' +
                    icon.url + '" style="width: 32px; height: 32px"></a></td>';
            });

            smileysHtml += '</tr>';
        });

        smileysHtml += '</table>';

        return smileysHtml;
    }

    function concatArray(array) {
        var each = tinymce.each, result = [];
        each(array, function (item) {
            result = result.concat(item);
        });
        return result.length > 0 ? result : array;
    }

    function findAndReplaceDOMText(regex, node, replacementNode, captureGroup, schema) {
        var m, matches = [], text, count = 0, doc;
        var blockElementsMap, hiddenTextElementsMap, shortEndedElementsMap;

        doc = node.ownerDocument;
        blockElementsMap = schema.getBlockElements(); // H1-H6, P, TD etc
        hiddenTextElementsMap = schema.getWhiteSpaceElements(); // TEXTAREA, PRE, STYLE, SCRIPT
        shortEndedElementsMap = schema.getShortEndedElements(); // BR, IMG, INPUT

        function getMatchIndexes(m, captureGroup) {
            captureGroup = captureGroup || 0;

            var index = m.index;

            if (captureGroup > 0) {
                var cg = m[captureGroup];
                index += m[0].indexOf(cg);
                m[0] = cg;
            }

            return [index, index + m[0].length, [m[0]]];
        }

        function getText(node) {
            var txt;

            if (node.nodeType === 3) {
                return node.data;
            }

            if (hiddenTextElementsMap[node.nodeName] && !blockElementsMap[node.nodeName]) {
                return '';
            }

            txt = '';

            if (blockElementsMap[node.nodeName] || shortEndedElementsMap[node.nodeName]) {
                txt += '\n';
            }

            if ((node = node.firstChild)) {
                do {
                    txt += getText(node);
                } while ((node = node.nextSibling));
            }

            return txt;
        }

        function stepThroughMatches(node, matches, replaceFn) {
            var startNode, endNode, startNodeIndex,
                endNodeIndex, innerNodes = [], atIndex = 0, curNode = node,
                matchLocation = matches.shift(), matchIndex = 0;

            out: while (true) {
                if (blockElementsMap[curNode.nodeName] || shortEndedElementsMap[curNode.nodeName]) {
                    atIndex++;
                }

                if (curNode.nodeType === 3) {
                    if (!endNode && curNode.length + atIndex >= matchLocation[1]) {
                        // We've found the ending
                        endNode = curNode;
                        endNodeIndex = matchLocation[1] - atIndex;
                    } else if (startNode) {
                        // Intersecting node
                        innerNodes.push(curNode);
                    }

                    if (!startNode && curNode.length + atIndex > matchLocation[0]) {
                        // We've found the match start
                        startNode = curNode;
                        startNodeIndex = matchLocation[0] - atIndex;
                    }

                    atIndex += curNode.length;
                }

                if (startNode && endNode) {
                    curNode = replaceFn({
                        startNode: startNode,
                        startNodeIndex: startNodeIndex,
                        endNode: endNode,
                        endNodeIndex: endNodeIndex,
                        innerNodes: innerNodes,
                        match: matchLocation[2],
                        matchIndex: matchIndex
                    });

                    // replaceFn has to return the node that replaced the endNode
                    // and then we step back so we can continue from the end of the
                    // match:
                    atIndex -= (endNode.length - endNodeIndex);
                    startNode = null;
                    endNode = null;
                    innerNodes = [];
                    matchLocation = matches.shift();
                    matchIndex++;

                    if (!matchLocation) {
                        break; // no more matches
                    }
                } else if ((!hiddenTextElementsMap[curNode.nodeName] || blockElementsMap[curNode.nodeName]) && curNode.firstChild) {
                    // Move down
                    curNode = curNode.firstChild;
                    continue;
                } else if (curNode.nextSibling) {
                    // Move forward:
                    curNode = curNode.nextSibling;
                    continue;
                }

                // Move forward or up:
                while (true) {
                    if (curNode.nextSibling) {
                        curNode = curNode.nextSibling;
                        break;
                    } else if (curNode.parentNode !== node) {
                        curNode = curNode.parentNode;
                    } else {
                        break out;
                    }
                }
            }
        }

        /**
        * Generates the actual replaceFn which splits up text nodes
        * and inserts the replacement element.
        */
        function genReplacer(nodeName) {
            var makeReplacementNode;

            if (typeof nodeName != 'function') {
                var stencilNode = nodeName.nodeType ? nodeName : doc.createElement(nodeName);

                makeReplacementNode = function () {
                    var clone = stencilNode.cloneNode(false);
                    return clone;
                };
            } else {
                makeReplacementNode = nodeName;
            }

            return function replace(range) {
                var before, after, parentNode, startNode = range.startNode,
                    endNode = range.endNode;

                if (startNode === endNode) {
                    var node = startNode;

                    parentNode = node.parentNode;
                    if (range.startNodeIndex > 0) {
                        // Add `before` text node (before the match)
                        before = doc.createTextNode(node.data.substring(0, range.startNodeIndex));
                        parentNode.insertBefore(before, node);
                    }

                    // Create the replacement node:
                    var el = makeReplacementNode();
                    parentNode.insertBefore(el, node);
                    if (range.endNodeIndex < node.length) {
                        // Add `after` text node (after the match)
                        after = doc.createTextNode(node.data.substring(range.endNodeIndex));
                        parentNode.insertBefore(after, node);
                    }

                    node.parentNode.removeChild(node);

                    return el;
                }
            };
        }

        text = getText(node);
        if (!text) {
            return;
        }
        while ((m = regex.exec(text))) {
            matches.push(getMatchIndexes(m, captureGroup));
        }

        if (matches.length) {
            count = matches.length;
            stepThroughMatches(node, matches, genReplacer(replacementNode));
        }

        return count;
    }

    function replaceAllMatches(smiley) {
        var each = tinymce.each, node = editor.selection.getNode(), marker, text;
        if (typeof (smiley.shortcut) === 'string') {
            text = smiley.shortcut.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");

            marker = editor.dom.create('img', { "src": smiley.url, "title": smiley.title });

            return findAndReplaceDOMText(new RegExp(text, 'gi'), node, marker, false, editor.schema);
        }
        else if (Array.isArray(smiley.shortcut)) {
            each(smiley.shortcut, function(item) {

                marker = editor.dom.create('img', { "src": smiley.url, "title": smiley.title });

                return findAndReplaceDOMText(new RegExp(item.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"), 'gi'), node, marker, false, editor.schema);
            });
        }
    }

    editor.on("keyup", function (e) {
        if (!!editor.settings.auto_convert_smileys) {
            var each = tinymce.each, selection = editor.selection, node = selection.getNode();
            if (node) {
                each(concatArray(fullSmileysList), function (smiley) {
                    replaceAllMatches(smiley);
                });
            }
        }
    });

    editor.addButton('smileys', {
        type: 'panelbutton',
        icon: 'emoticons',
        panel: {
            autohide: true,
            html: getHtml,
            onclick: function (e) {
                var linkElm = editor.dom.getParent(e.target, 'a');

                if (linkElm) {
                    editor.insertContent('<img src="' + linkElm.getAttribute('data-mce-url') + '" title="' + linkElm.getAttribute('title') + '" />');
                    this.hide();
                }
            }
        },
        tooltip: 'Emoticons'
    });
});
