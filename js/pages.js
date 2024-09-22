document.addEventListener("DOMContentLoaded", function() {
    const pages = [
        {
            leftImage: "images/TL-1999.jpg",
            rightContent: {
                title: "1999",
                text: "Launch of Neopets.com. Originally founded by two college students, Neopets would eventually define the virtual pet game genre and rapidly exploded in popularity."
            }
        },
        {
            leftImage: "images/TL-2002.png",
            rightContent: {
                title: "2002",
                text: "Champions of Meridell is released, introducing Neopians to Lisha, Jeran, and a whole cast of other characters while setting the standard of what a Neopet plot could look like."
            }
        },
        {
            leftImage: "images/TL_2004.png",
            rightContent: {
                title: "2004",
                text: "Hannah, Kanrik, and Armin defeat the nefarious Bringer of Night in Hannah and the Ice Caves."
            }
        },
        {
            leftImage: "images/TL_2005.png",
            rightContent: {
                title: "2005",
                text: "Neopia is saved by Tormund and Roberta in the Darkest Faerie, released on PS2."
            }
        },
        {
            leftImage: "images/TL_2006.png",
            rightContent: {
                title: "2006",
                text: "The legendary city of Altador is restored to its full glory with King Altador taking his rightful place on the throne."
            }
        },
        {
            leftImage: "images/TL_2008.png",
            rightContent: {
                title: "2008",
                text: "The Return of Doctor Sloth premiers. Neopia's archenemy is defeated by being trapped within the Space Faerie's Token."
            }
        },
        {
            leftImage: "images/TL_2010.png",
            rightContent: {
                title: "2010",
                text: "Kari, the Negg Faerie kicks off the very first Festival of Neggs event"
            }
        },
        {
            leftImage: "images/TL_2013.png",
            rightContent: {
                title: "2013",
                text: "An earthquak rattles Tyrannia, setting off the war for the Obselisk."
            }
        },
        {
            leftImage: "images/TL_2015.png",
            rightContent: {
                title: "2015",
                text: "Everyone's favorite daily slot game, Trudy's Surprise, makes it Neopets debut."
            }
        },
        {
            leftImage: "images/TL_2017.png",
            rightContent: {
                title: "2017",
                text: "The Darkest Faerie is released from her prison of stone in the Wraith Resurgence plot."
            }
        },
        {
            leftImage: "images/TL_2019.png",
            rightContent: {
                title: "2019",
                text: "Neopets celebrates its 20th anniversary!"
            }
        },
        {
            leftImage: "images/TL_2020.png",
            rightContent: {
                title: "2020",
                text: "Neopets: Island Builders, the construction game set on the isle of Darcardia, enters open Beta."
            }
        },
        {
            leftImage: "images/TL_2022.png",
            rightContent: {
                title: "2022",
                text: "Launch of Neopets: Faerie's Hope, the mobile Match3 game set in the clouds of New Faerieland."
            }
        },
        
        // Add more pages as needed
    ];

    let currentPageIndex = 0;

    function updatePageContent() {
        const leftImage = document.querySelector('.left-page-image');
        const rightTitle = document.querySelector('.right-page-content h2');
        const rightText = document.querySelector('.right-page-content p');

        // Update the left page image
        leftImage.src = pages[currentPageIndex].leftImage;

        // Update the right page content
        rightTitle.textContent = pages[currentPageIndex].rightContent.title;
        rightText.textContent = pages[currentPageIndex].rightContent.text;
    }

    function triggerPageTurnAnimation() {
        const leftPage = document.querySelector('#left-page');
        const rightPage = document.querySelector('#right-page');
    
        // Remove any existing animation classes
        leftPage.classList.remove('animate');
        rightPage.classList.remove('animate');
    
        // Force reflow (flush the CSS changes) to restart the animation
        void leftPage.offsetWidth;
        void rightPage.offsetWidth;
    
        // Add the animate class to trigger the animation
        leftPage.classList.add('animate');
        rightPage.classList.add('animate');
    
        // Update the content after the animation completes
        setTimeout(() => {
            updatePageContent();
        }, 600); // Match the duration of the animation (0.6s)
    
        // Remove the animate class after the animation completes to reset the state
        setTimeout(() => {
            leftPage.classList.remove('animate');
            rightPage.classList.remove('animate');
        }, 1200); // Allow a little time before resetting the animation classes
    }

    document.getElementById('next-page').addEventListener('click', function() {
        if (currentPageIndex < pages.length - 1) {
            currentPageIndex++;
            triggerPageTurnAnimation();
        }
    });

    document.getElementById('prev-page').addEventListener('click', function() {
        if (currentPageIndex > 0) {
            currentPageIndex--;
            triggerPageTurnAnimation();
        }
    });

    // Initialize first page content
    updatePageContent();
});
