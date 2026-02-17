# Vim - Sıfırdan Master Səviyyəyə Roadmap 🎯

> Modal Text Editor-un Tam Bələdçisi

---

## 📚 Giriş

**Vim nədir?**
- Güclü modal text editor
- Terminal əsaslı (GUI versiyası da var)
- 1991-ci ildən bəri mövcuddur
- Vi-nin təkmilləşdirilmiş versiyası (Vi IMproved)
- Proqramçılar, sistem adminləri və power user-lər üçün

**Niyə Vim öyrənməliyik?**
- ✅ Əllərini klaviaturadan ayırmırsan (mouse yox)
- ✅ İnanılmaz dərəcədə sürətli editing
- ✅ Hər yerdə mövcuddur (server, Linux, Mac, Windows)
- ✅ Yüksək customizable
- ✅ Güçlü plugins sistemi
- ✅ Öyrəndikdən sonra başqa editorlar yavaş gələcək

**Öyrənmə müddəti:**
- Əsaslar: 1-2 həftə
- Rahat istifadə: 1-2 ay
- Mahir: 3-6 ay
- Master: 1+ il

---

## 🎯 Səviyyələr

- **Level 0**: Quraşdırma və İlk Addımlar (1-2 gün)
- **Level 1**: Survival - Sağ Qalmaq (3-7 gün)
- **Level 2**: Comfort - Rahat İşləmək (2-4 həftə)
- **Level 3**: Efficiency - Effektiv Olmaq (1-2 ay)
- **Level 4**: Power User (2-4 ay)
- **Level 5**: Vim Master (6+ ay)

---

# Level 0: Quraşdırma və İlk Addımlar 🔰

## Quraşdırma

### Linux:
```bash
# Ubuntu/Debian
sudo apt install vim

# Arch Linux
sudo pacman -S vim

# Fedora
sudo dnf install vim
```

### macOS:
```bash
# Homebrew ilə
brew install vim

# və ya MacVim (GUI)
brew install --cask macvim
```

### Windows:
1. [vim.org](https://www.vim.org/download.php) - gVim download
2. Və ya Chocolatey ilə: `choco install vim`
3. WSL (Windows Subsystem for Linux) içində Linux versiyası

## Vim-ə Giriş

### İlk dəfə açmaq:
```bash
vim
```

### Vim-i bağlamaq (əsas problem yeni başlayanlar üçün 😄):
```
:q     - çıx (dəyişiklik yoxdursa)
:q!    - dəyişiklikləri yadda saxlamadan çıx
:wq    - yadda saxla və çıx
:x     - yadda saxla və çıx (qısa)
ZZ     - yadda saxla və çıx (daha qısa)
```

## Vim Modları

Vim-in əsas fərqi: **Modal Editor** olmasıdır.

### 6 Əsas Mod:

1. **Normal Mode** (Command Mode)
   - Default mod
   - Hərəkət və komandalar üçün
   - `Esc` basaraq bu moda gəlirsən

2. **Insert Mode**
   - Mətn yazmaq üçün
   - `i` ilə daxil ol
   - `Esc` ilə çıx

3. **Visual Mode**
   - Mətn seçmək üçün
   - `v` ilə daxil ol

4. **Command-Line Mode**
   - `:` ilə daxil ol
   - Komandalar yazmaq üçün

5. **Replace Mode**
   - `R` ilə daxil ol
   - Üzərinə yaz

6. **Ex Mode**
   - `Q` ilə daxil ol (nadir istifadə olunur)

---

# Level 1: Survival - Sağ Qalmaq 🆘

> Bu səviyyədə məqsəd: Vim-də sağ qalmaq və əsas editing edə bilmək

## İlk Addımlar

### Fayl açmaq:
```bash
vim file.txt          # fayl aç
vim +10 file.txt      # 10-cu sətirdən aç
vim +/search file.txt # "search" sözündə aç
vim file1.txt file2.txt  # birdən çox fayl
```

### Insert Mode-a keçid:
```
i   - cursor-dan əvvəl
a   - cursor-dan sonra
I   - sətrin əvvəlində
A   - sətrin sonunda
o   - aşağıda yeni sətir
O   - yuxarıda yeni sətir
```

### Hərəkət (Motion) - Əsas:
```
h   - sola
j   - aşağı
k   - yuxarı
l   - sağa

Və ya Arrow keys (amma real Vim users h,j,k,l istifadə edir)
```

### Yadda saxlamaq:
```
:w              - save
:w filename     - başqa adla save
:w !sudo tee %  - sudo ilə save (permissions üçün)
```

### Sil və Undo/Redo:
```
x       - simvol sil (cursor altında)
dd      - sətir sil
u       - undo
Ctrl+r  - redo
```

### Kopyala və Yapışdır:
```
yy  - sətiri kopyala (yank)
p   - yapışdır (paste) - cursor-dan sonra
P   - yapışdır - cursor-dan əvvəl
```

### İlk Gün Praktikası:
1. Vim aç: `vim practice.txt`
2. `i` bas - mətn yaz
3. `Esc` bas
4. `dd` bas - sətir sil
5. `u` bas - geri al
6. `:wq` yaz - save və çıx

**1 həftə hər gün 30 dəqiqə praktika et!**

---

# Level 2: Comfort - Rahat İşləmək ✨

## Hərəkət (Navigation) - Advanced

### Söz üzrə:
```
w   - növbəti sözün əvvəlinə
b   - əvvəlki sözün əvvəlinə
e   - növbəti sözün sonuna
ge  - əvvəlki sözün sonuna

W, B, E  - eyni amma punktuasiya ignore edir
```

### Sətir üzrə:
```
0   - sətrin əvvəlinə
^   - sətrin ilk non-blank simvoluna
$   - sətrin sonuna
g_  - sətrin son non-blank simvoluna
```

### Ekran üzrə:
```
H   - ekranın yuxarısı (High)
M   - ekranın ortası (Middle)
L   - ekranın aşağısı (Low)

gg  - faylın əvvəlinə
G   - faylın sonuna
5G  - 5-ci sətirə get
:25 - 25-ci sətirə get
```

### Skrolling:
```
Ctrl+f  - səhifə aşağı (forward)
Ctrl+b  - səhifə yuxarı (backward)
Ctrl+d  - yarım səhifə aşağı (down)
Ctrl+u  - yarım səhifə yuxarı (up)
Ctrl+e  - bir sətir aşağı
Ctrl+y  - bir sətir yuxarı

zz      - cursor-u ekranın ortasına
zt      - cursor-u ekranın yuxarısına (top)
zb      - cursor-u ekranın aşağısına (bottom)
```

## Editing - Advanced

### Silmə (Delete):
```
x    - simvol sil
dw   - söz sil
d$   - cursor-dan sətrin sonunadək sil
d0   - cursor-dan sətrin əvvəlinədək sil
dd   - sətir sil
5dd  - 5 sətir sil
dG   - cursor-dan faylın sonunadək sil
dgg  - cursor-dan faylın əvvəlinədək sil
```

### Dəyişdirmə (Change):
```
c    - dəyişdir (sil və insert mode)
cw   - söz dəyişdir
c$   - sətrin sonunadək dəyişdir
cc   - bütün sətri dəyişdir
C    - cursor-dan sətrin sonunadək dəyişdir
```

### Kopyalama (Yank):
```
y    - kopyala
yy   - sətir kopyala
y$   - cursor-dan sətrin sonunadək
5yy  - 5 sətir kopyala
```

### Yapışdırma (Paste):
```
p    - sonra yapışdır
P    - əvvəl yapışdır
```

### Simvol dəyişdirmə:
```
r    - tək simvol dəyişdir (replace)
R    - Replace mode (insert kimi amma üzərinə yazır)
~    - hərfin case-ni dəyişdir (a→A, A→a)
```

## Axtarış (Search)

### Əsas axtarış:
```
/pattern   - axtarış (forward)
?pattern   - axtarış (backward)
n          - növbəti nəticə
N          - əvvəlki nəticə
*          - cursor altındaki sözü axtarış (forward)
#          - cursor altındaki sözü axtarış (backward)
```

### Simvol üzrə:
```
f{char}  - sətirdə simvolu tap (forward)
F{char}  - sətirdə simvolu tap (backward)
t{char}  - simvoldan əvvələ get (till)
T{char}  - simvoldan əvvələ get (backward)
;        - təkrarla
,        - əks istiqamətdə təkrarla
```

## Dəyişdirmə və Əvəzetmə (Replace)

### Sadə əvəzetmə:
```
:s/old/new/      - cari sətirdə ilk old-u new-lə əvəz et
:s/old/new/g     - cari sətirdə bütün old-ları
:%s/old/new/g    - bütün faylda bütün old-ları
:%s/old/new/gc   - təsdiq istəyərək (confirm)
```

### Regex ilə:
```
:%s/\d\+/NUM/g   - bütün rəqəmləri NUM-la əvəz et
```

## Praktika (2-4 həftə):

1. **Gündəlik təşkilatçı** yaz Vim-də
2. **Code fayllarını** Vim ilə edit et
3. `vimtutor` komandası ilə built-in tutorial-ı tamamla
4. Hər gün ən azı 1 saat praktika

---

# Level 3: Efficiency - Effektiv Olmaq ⚡

## Operators və Motions

Vim-in gücü: **Operator + Motion** kombinasiyası

### Operator Konsepti:
```
d   - delete
c   - change
y   - yank (copy)
>   - indent sağa
<   - indent sola
=   - auto-indent
```

### Kombinasiyalar:
```
dw    - delete word
d2w   - delete 2 words
d$    - delete until end of line
di"   - delete inside quotes
da"   - delete around quotes (quotes daxil)
ci(   - change inside parentheses
yi{   - yank inside braces
vi[   - visual select inside brackets
```

### Text Objects:
```
iw   - inner word
aw   - a word (boşluqla)
is   - inner sentence
as   - a sentence
ip   - inner paragraph
ap   - a paragraph
i"   - inside quotes
a"   - around quotes (includes quotes)
i(   - inside parentheses
a(   - around parentheses
i{   - inside braces
a{   - around braces
it   - inside tag (HTML/XML)
at   - around tag
```

### Praktiki nümunələr:
```
di"   - "hello world" → ""
da"   - "hello world" → (tamamilə silinir)
ci(   - (foo bar) → ()  (və insert mode)
yi{   - { code } → kopyalayır { code }
das   - cümlə sil
dap   - paraqraf sil
```

## Registers (Yaddaş)

### Register nədir?
Vim clipboard-lar - kopyalanan mətnin saxlandığı yerlər.

### Register növləri:
```
"    - default (unnamed)
0    - yank register
1-9  - delete registers (sonuncu 9 silinmə)
a-z  - named registers (təyin etdiyin)
+    - system clipboard
*    - selection clipboard
%    - cari fayl adı
/    - son axtarış pattern
:    - son command
```

### İstifadə:
```
"ayy    - cari sətri 'a' register-ə kopyala
"ap     - 'a' register-dən yapışdır
"+yy    - sətri system clipboard-a kopyala
"+p     - system clipboard-dan yapışdır
:reg    - bütün register-ləri göstər
```

## Macros

Təkrarlanan hərəkətləri qeyd edib yenidən işə sal!

### Macro yaratmak:
```
q{register}  - macro qeydi başlat
q            - macro qeydi dayandır
@{register}  - macro-nu işə sal
@@           - sonuncu macro-nu təkrarla
5@a          - 'a' macro-sunu 5 dəfə işə sal
```

### Nümunə:
```
qa          - 'a' register-ə macro qeydi başlat
I"          - sətrin əvvəlinə " əlavə et
A"          - sətrin sonuna " əlavə et
j           - növbəti sətirə
q           - macro qeydi dayandır
@a          - işə sal
10@a        - 10 dəfə işə sal
```

## Marks (İşarələr)

Faylda yerləri yadda saxla və oraya get!

### İstifadə:
```
m{a-z}     - local mark (cari faylda)
m{A-Z}     - global mark (bütün fayllarda)
`{mark}    - mark-a get (dəqiq yer)
'{mark}    - mark-ın sətirinə get
:marks     - bütün mark-ları göstər
```

### Xüsusi marks:
```
``    - sonuncu jump yeri
`.    - sonuncu dəyişiklik yeri
`"    - faylı bağlayanda cursor-un olduğu yer
`[    - sonuncu copy/change-in başlanğıcı
`]    - sonuncu copy/change-in sonu
```

## Splits və Tabs

### Window Splits:
```
:split file.txt    - horizontal split
:vsplit file.txt   - vertical split
Ctrl+w s           - horizontal split
Ctrl+w v           - vertical split

# Splits arasında hərəkət
Ctrl+w h   - sola get
Ctrl+w j   - aşağı get
Ctrl+w k   - yuxarı get
Ctrl+w l   - sağa get
Ctrl+w w   - növbəti window

# Split resize
Ctrl+w =   - bərabər ölçü
Ctrl+w +   - hündürlük artır
Ctrl+w -   - hündürlük azalt
Ctrl+w >   - en artır
Ctrl+w <   - en azalt

# Split bağla
:q         - cari window
:only      - digərlərini bağla
```

### Tabs:
```
:tabnew file.txt   - yeni tab
:tabn              - növbəti tab
:tabp              - əvvəlki tab
gt                 - növbəti tab (normal mode)
gT                 - əvvəlki tab
3gt                - 3-cü tab-a get
:tabclose          - tab bağla
:tabonly           - digər tab-ları bağla
```

## Folding (Qatlamaq)

Kodu qatla və daha yaxşı bax!

```
zf    - fold yarat
zo    - fold aç
zc    - fold bağla
za    - fold toggle
zR    - bütün fold-ları aç
zM    - bütün fold-ları bağla
zj    - növbəti fold
zk    - əvvəlki fold
```

## Praktika (1-2 ay):

1. Macro ilə repetitiv taskları avtomatlaşdır
2. Splits ilə birdən çox fayla bax
3. Text objects-i master et
4. Registers ilə effektiv kopyala
5. Real layihələrdə işlə

---

# Level 4: Power User 💪

## .vimrc Configuration

Vim-i öz üslubuna uyğunlaşdır!

### .vimrc faylı:
```vim
" ~/.vimrc (Linux/Mac)
" ~/_vimrc (Windows)

" ===== ƏSAS TƏNZİMLƏMƏLƏR =====

" Nömrələri göstər
set number
set relativenumber

" Syntax highlighting
syntax on

" Tab settings
set tabstop=4       " Tab 4 boşluq
set shiftwidth=4    " Indent 4 boşluq
set expandtab       " Tab-ı boşluqlara çevir

" Axtarış
set ignorecase      " Case-insensitive search
set smartcase       " Böyük hərf varsa case-sensitive
set incsearch       " İnkremental axtarış
set hlsearch        " Axtarış nəticələrini highlight et

" UI
set showcmd         " Komutu göstər
set showmatch       " Matching brackets
set wildmenu        " Komanda-line completion
set laststatus=2    " Status line həmişə göstər
set ruler           " Cursor position göstər

" Performance
set lazyredraw      " Macro zamanı redraw etmə

" Backup və swap faylları
set nobackup
set noswapfile
set undofile        " Persistent undo
set undodir=~/.vim/undodir

" Clipboard
set clipboard=unnamedplus  " System clipboard istifadə et

" Mouse (əgər istəyirsənsə)
set mouse=a

" Wrap
set nowrap          " Wrap etmə
set wrap            " və ya wrap et

" Encoding
set encoding=utf-8

" Leader key
let mapleader = " "  " Space leader key olaraq
```

## Key Mappings (Öz komandaların)

### Mapping yaratmaq:
```vim
" Normal mode mapping
nnoremap <leader>w :w<CR>      " Space+w = save

" Insert mode mapping
inoremap jk <Esc>               " jk = Escape

" Visual mode mapping
vnoremap <leader>y "+y          " Space+y = clipboard-a copy

" Command mapping
cnoremap w!! w !sudo tee %      " w!! = sudo save

" Funksiya açarı
nnoremap <F5> :!python %<CR>    " F5 = python run
```

### Faydalı mappings:
```vim
" Quick save və quit
nnoremap <leader>w :w<CR>
nnoremap <leader>q :q<CR>
nnoremap <leader>x :x<CR>

" Split navigation
nnoremap <C-h> <C-w>h
nnoremap <C-j> <C-w>j
nnoremap <C-k> <C-w>k
nnoremap <C-l> <C-w>l

" Tab navigation
nnoremap <leader>tn :tabnew<CR>
nnoremap <leader>tc :tabclose<CR>

" Search highlight toggle
nnoremap <leader>h :nohlsearch<CR>

" Buffer navigation
nnoremap <Tab> :bnext<CR>
nnoremap <S-Tab> :bprevious<CR>

" Indent in visual mode
vnoremap < <gv
vnoremap > >gv

" Move lines
nnoremap <A-j> :m .+1<CR>==
nnoremap <A-k> :m .-2<CR>==
vnoremap <A-j> :m '>+1<CR>gv=gv
vnoremap <A-k> :m '<-2<CR>gv=gv
```

## Plugins

### Plugin Manager - vim-plug

#### Quraşdırma:
```bash
# Linux/Mac
curl -fLo ~/.vim/autoload/plug.vim --create-dirs \
    https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim

# Windows (PowerShell)
iwr -useb https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim |`
    ni $HOME/vimfiles/autoload/plug.vim -Force
```

#### .vimrc-də:
```vim
call plug#begin('~/.vim/plugged')

" Plugins buraya
Plug 'preservim/nerdtree'
Plug 'vim-airline/vim-airline'
Plug 'tpope/vim-surround'
Plug 'junegunn/fzf', { 'do': { -> fzf#install() } }
Plug 'junegunn/fzf.vim'

call plug#end()

" Sonra Vim-də:
" :PlugInstall
```

### Ən Populyar Pluginlər:

#### 1. **NERDTree** - File Explorer
```vim
Plug 'preservim/nerdtree'

" Mapping
nnoremap <leader>n :NERDTreeToggle<CR>
```

#### 2. **fzf.vim** - Fuzzy Finder
```vim
Plug 'junegunn/fzf', { 'do': { -> fzf#install() } }
Plug 'junegunn/fzf.vim'

" Mappings
nnoremap <leader>f :Files<CR>
nnoremap <leader>b :Buffers<CR>
nnoremap <leader>g :Rg<CR>
```

#### 3. **vim-surround** - Surround text
```vim
Plug 'tpope/vim-surround'

" İstifadə:
" cs"'  - " əvəzinə '
" ds"   - " sil
" ysiw" - sözün ətrafına " əlavə et
```

#### 4. **vim-airline** - Status bar
```vim
Plug 'vim-airline/vim-airline'
Plug 'vim-airline/vim-airline-themes'

let g:airline_theme='gruvbox'
let g:airline_powerline_fonts = 1
```

#### 5. **vim-commentary** - Kommentlər
```vim
Plug 'tpope/vim-commentary'

" gcc - sətri comment et
" gc  - visual select-i comment et
```

#### 6. **coc.nvim** - IntelliSense (autocomplete)
```vim
Plug 'neoclide/coc.nvim', {'branch': 'release'}

" Tab ilə autocomplete
inoremap <silent><expr> <TAB>
      \ pumvisible() ? "\<C-n>" :
      \ <SID>check_back_space() ? "\<TAB>" :
      \ coc#refresh()
```

#### 7. **vim-gitgutter** - Git dəyişiklikləri
```vim
Plug 'airblade/vim-gitgutter'
```

#### 8. **auto-pairs** - Bracket avtomatik bağla
```vim
Plug 'jiangmiao/auto-pairs'
```

#### 9. **gruvbox** - Color scheme
```vim
Plug 'morhetz/gruvbox'

colorscheme gruvbox
set background=dark
```

#### 10. **vim-fugitive** - Git integration
```vim
Plug 'tpope/vim-fugitive'

" :Git status
" :Git commit
" :Git push
```

## Advanced Commands

### Buffer İdarəsi:
```vim
:ls           - buffer siyahısı
:b5           - 5-ci buffer-ə get
:bn           - növbəti buffer
:bp           - əvvəlki buffer
:bd           - buffer-i sil
:bufdo %s/old/new/g   - bütün buffer-lərdə əvəz et
```

### Global Command:
```vim
:g/pattern/d       - pattern olan sətirləri sil
:g!/pattern/d      - pattern olmayan sətirləri sil
:g/TODO/t$         - TODO olan sətirləri faylın sonuna kopyala
:g/^$/d            - boş sətirləri sil
```

### Quickfix List:
```vim
:make              - make run et və errors-ları göstər
:cn                - növbəti error
:cp                - əvvəlki error
:copen             - quickfix window aç
:cclose            - quickfix window bağla
```

### Ex Commands:
```vim
:earlier 10m       - 10 dəqiqə əvvələ get
:later 5m          - 5 dəqiqə sonraya get
:read !ls          - komanda output-u faylə əlavə et
:write !bash       - faylı bash-ə göndər
:%!python -m json.tool  - JSON formatla
```

## Praktika (2-4 ay):

1. Öz .vimrc-ni yarat və customize et
2. 5-10 plugin quraşdır və öyrən
3. Custom mappings yarat
4. Real layihələrə contribute et Vim ilə

---

# Level 5: Vim Master 🏆

## Vimscript

Öz plugin və funksiyalarını yaz!

### Əsaslar:
```vim
" Dəyişənlər
let name = "Ali"
let age = 25

" If/else
if age >= 18
    echo "Adult"
else
    echo "Minor"
endif

" Loop
for i in range(1, 10)
    echo i
endfor

" Funksiya
function! SayHello(name)
    echo "Salam, " . a:name . "!"
endfunction

call SayHello("Ali")
```

### Faydalı Funksiyalar:
```vim
" Trailing spaces-ləri təmizlə
function! TrimWhitespace()
    let l:save = winsaveview()
    keeppatterns %s/\s\+$//e
    call winrestview(l:save)
endfunction

command! TrimWhitespace call TrimWhitespace()

" Auto-format on save
autocmd BufWritePre * :call TrimWhitespace()
```

```vim
" Toggle relative number
function! ToggleRelativeNumber()
    if &relativenumber
        set norelativenumber
    else
        set relativenumber
    endif
endfunction

nnoremap <leader>r :call ToggleRelativeNumber()<CR>
```

## Autocommands

Müəyyən hadisələrdə avtomatik hərəkət et!

```vim
" Fayl növünə görə settings
autocmd FileType python setlocal tabstop=4 shiftwidth=4
autocmd FileType javascript setlocal tabstop=2 shiftwidth=2
autocmd FileType html setlocal tabstop=2 shiftwidth=2

" Save zamanı auto-format
autocmd BufWritePre *.py :normal gg=G``

" Fayl açılanda son position-a get
autocmd BufReadPost *
    \ if line("'\"") > 0 && line("'\"") <= line("$") |
    \   exe "normal! g`\"" |
    \ endif

" Auto-close NERDTree
autocmd BufEnter * if tabpagenr('$') == 1 && winnr('$') == 1 && exists('b:NERDTree') && b:NERDTree.isTabTree() | quit | endif
```

## Advanced Text Objects

### Öz text object-lərini yarat:
```vim
" Function text object
onoremap <silent> af :<C-u>call <SID>function_textobject('a')<CR>
onoremap <silent> if :<C-u>call <SID>function_textobject('i')<CR>
```

## Neovim

Modern Vim alternative - daha sürətli və async!

### Quraşdırma:
```bash
# Ubuntu
sudo apt install neovim

# macOS
brew install neovim

# Arch
sudo pacman -S neovim
```

### init.vim (Neovim config):
```bash
# Config location
~/.config/nvim/init.vim
```

### Lua config (Neovim 0.5+):
```lua
-- ~/.config/nvim/init.lua

vim.opt.number = true
vim.opt.relativenumber = true
vim.opt.tabstop = 4
vim.opt.shiftwidth = 4
vim.opt.expandtab = true

-- Key mappings
vim.keymap.set('n', '<leader>w', ':w<CR>')
vim.keymap.set('n', '<leader>q', ':q<CR>')
```

### Neovim-specific plugins:
```vim
Plug 'nvim-treesitter/nvim-treesitter'  " Better syntax
Plug 'nvim-telescope/telescope.nvim'    " Fuzzy finder
Plug 'nvim-lua/plenary.nvim'            " Lua functions
Plug 'neovim/nvim-lspconfig'            " LSP support
```

## Performance Optimization

### Profiling:
```vim
:profile start profile.log
:profile func *
:profile file *
" İşləri et
:profile pause
:noautocmd qall!
```

### Lazy loading plugins:
```vim
Plug 'preservim/nerdtree', { 'on': 'NERDTreeToggle' }
Plug 'junegunn/fzf.vim', { 'on': ['Files', 'Rg'] }
```

## Regex Mastery

### Vim regex-i:
```vim
\d      - digit
\D      - non-digit
\w      - word character
\W      - non-word
\s      - whitespace
\S      - non-whitespace
\a      - alphabetic
\l      - lowercase
\u      - uppercase

" Quantifiers
*       - 0 və ya daha çox
\+      - 1 və ya daha çox
\?      - 0 və ya 1
\{n,m}  - n-dən m-ə qədər

" Grouping
\(pattern\)   - group
\1, \2        - backreference
```

### Praktiki nümunələr:
```vim
:%s/\d\+/NUM/g                    " Bütün rəqəmləri NUM ilə əvəz et
:%s/\(\w\+\) \(\w\+\)/\2 \1/g    " Söz ardıcıllığını çevir
:%s/\v([0-9]+)/\=submatch(1)*2/g " Rəqəmləri 2-yə vur
```

## Practical Workflows

### IDE kimi istifadə:
```vim
" File tree
<leader>n - NERDTree

" Fuzzy search
<leader>f - Files
<leader>g - Grep

" Code navigation
gd - Go to definition
K  - Documentation

" Code completion
<Tab> - Autocomplete

" Git
:Git status
:Git diff
:Git commit
```

### Multi-cursor simulation:
```vim
" cgn istifadə et
/pattern<CR>   " axtarış
cgn            " dəyişdir
.              " təkrarla
n.             " növbəti və təkrarla
```

---

# 🚀 Vim Challenges

## 30 Günlük Challenge:

### Həftə 1: Basics
- [ ] Vim-i hər gün ən azı 1 saat istifadə et
- [ ] vimtutor tamamla
- [ ] h,j,k,l istifadə edib mouse istifadə etmə
- [ ] Insert mode-a müxtəlif yollarla giriş et (i,a,o,O,I,A)

### Həftə 2: Motions
- [ ] w,b,e istifadə et
- [ ] 0,$,^ istifadə et
- [ ] f,F,t,T öyrən
- [ ] gg, G, :number istifadə et

### Həftə 3: Operators
- [ ] Text objects öyrən (iw, aw, i", i(, etc.)
- [ ] Operator + motion kombinasiyaları (dw, ci", yap, etc.)
- [ ] Registers istifadə et
- [ ] Macro yaz

### Həftə 4: Customization
- [ ] .vimrc yarat
- [ ] 5 plugin quraşdır
- [ ] 10 custom mapping yarat
- [ ] Color scheme seç

## Praktika Məsələləri:

1. **Text manipulation drill**:
   - Sətirləri sırala
   - Duplicate sətirləri sil
   - Hər sözün ilk hərfini böyük et
   - Kod indent et

2. **Code refactoring**:
   - Dəyişən adlarını dəyişdir
   - Funksiya extract et
   - Imports təmizlə

3. **File navigation**:
   - Layihədə fayllar arasında sürətlə hərəkət
   - Definition-a get
   - Search və replace multiple files

---

# 📚 Resurslar

## Online Resources:

### Interactive:
- [OpenVim](https://www.openvim.com/) - Interactive tutorial
- [Vim Adventures](https://vim-adventures.com/) - Oyun
- [VimGolf](https://www.vimgolf.com/) - Challenges

### Kitablar:
- **Practical Vim** - Drew Neil
- **Learning Vi and Vim Editors** - Arnold Robbins
- **Modern Vim** - Drew Neil

### Video:
- ThePrimeagen - YouTube
- Vim Casting - Ben Orenstein
- Chris Toomey - Vim talks

### Websites:
- [vim.org](https://www.vim.org/)
- [vimhelp.org](https://vimhelp.org/)
- [vimcasts.org](http://vimcasts.org/)
- [Vim Tips Wiki](https://vim.fandom.com/wiki/Vim_Tips_Wiki)

### Cheat Sheets:
- [Vim Cheat Sheet](https://vim.rtorr.com/)
- [Graphical Cheat Sheet](http://www.viemu.com/vi-vim-cheat-sheet.gif)

## Community:
- Reddit: r/vim
- Stack Overflow: vim tag
- Vi and Vim Stack Exchange

---

# 💡 Tips və Best Practices

## Learning Tips:

1. **Məcbur et özünü**: Mouseu deaktiv et
2. **Hər gün istifadə et**: Consistency key-dir
3. **Tənbəl olma**: Əgər bir şeyi 3 dəfə edirsənsə, macro/mapping yarat
4. **Help oxu**: `:help {topic}` ən yaxşı documentatiyadır
5. **Başqalarının .vimrc-sinə bax**: GitHub-da axtarış et

## Common Mistakes:

❌ Arrow keys istifadə etmək (h,j,k,l istifadə et)
❌ Hər dəfə i basıb edit edib Esc basmaq (operator + motion istifadə et)
❌ dd ilə sil, i ilə yaz (c istifadə et)
❌ Çox plugin quraşdırmaq (yalnız lazım olanları)
❌ Default settings saxlamaq (customize et!)

## Productivity Hacks:

✅ Leader key-i Space-ə təyin et
✅ jk və ya jj-ni Escape-ə map et
✅ Clipboard-la inteqrasiya
✅ Relative number istifadə et
✅ Autocomplete quraşdır (coc.nvim)

---

# 🎯 Roadmap Summary

```
Gün 1-7:     Survival mode
             ├─ Vim-i aç və bağla
             ├─ Insert mode
             ├─ Əsas navigation (hjkl)
             └─ Save və exit

Həftə 2-4:   Comfortable
             ├─ Advanced navigation (w,b,e,0,$)
             ├─ Delete, change, yank
             ├─ Search və replace
             └─ vimtutor tamamla

Ay 1-2:      Efficient
             ├─ Operators + motions
             ├─ Text objects
             ├─ Registers
             ├─ Macros
             └─ .vimrc yarat

Ay 2-4:      Power User
             ├─ Plugins (5-10)
             ├─ Custom mappings
             ├─ Splits və tabs
             └─ Workflow optimize et

Ay 4-6:      Advanced
             ├─ Vimscript
             ├─ Custom functions
             ├─ Neovim
             └─ IDE replacement

6+ ay:       Master
             ├─ Plugin development
             ├─ Complex workflows
             ├─ Teaching others
             └─ Contributing to Vim community
```

---

# 🎓 Sertifikat

Vim Master olmaq üçün:

✅ Mouse istifadə etmədən kod yaza bilirsən
✅ Macro-larla repetitiv taskları avtomatlaşdırırsan  
✅ Custom .vimrc-n və plugin-lərən var
✅ Text objects və operators-ı sezgisel istifadə edirsən
✅ Başqalarına Vim öyrədə bilirsən
✅ Vim komanda ilə hər şeyi edə bilirsən
✅ Normal mode-da düşünürsən

---

# 🏁 Son Sözlər

Vim öyrənmək marathon-dur, sprint deyil. İlk həftələr çətin gələcək, amma səbr et. 2-3 aydan sonra Vim-siz işləyə bilməyəcəksən!

**Remember**:
> "The best time to start using Vim was 10 years ago. The second best time is now."

**Uğurlar və Happy Vimming! 🚀**

---

## 🤝 Contribution

Əlavələr və düzəlişlər üçün pull request göndər!

## 📬 Feedback

Issue aç və ya sual ver!

---

**Son yeniləmə**: 2024
**Lisenziya**: MIT
