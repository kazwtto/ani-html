var syns = (s) => s.split(" ").slice(0, 15).join(" ") + "..."

async function _animesLoad(dom) {
    var animes = await fetch('animes.json')
        animes = await animes.json()
        animes = animes.filter(anime => anime.name_jp.length)
    
    for (var anime of animes) {
        var table       = document.createElement('table');
        table.className = "animeTable";

        
        table.innerHTML = `
        <tr>
            <td class="img"><img src="${anime.poster}"></td> 
            <td class="info">
                <div class="name">
                  <h2>${anime.name_jp}</h2>
                  <l>${anime.name_en}</l>
                </div>
                <div class="gender">
                    ${anime.gender.map(l => `<l>${l}</l>`)
                      .join("\n")}
                </div>
                <div class="synopsis">
                    <l>${syns(anime.synopsis)}</l>
                </div>
            
                
                <div class="divWatch">
                <button onclick='window.location.href = "${anime.anime_fire}";' class="watch">
                        ASSISTIR
                </button>
                </div>
                
            </td>
        </tr>
        
        `
        
        dom.appendChild(table)
    }
}