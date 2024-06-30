
interface GridSearch {
  icon?: string;
  css?: string;
  handleSearch?: (s: string) => void;
}

interface GridPagination {
  isText?: boolean;
  currentPage?: number;
  totalPages?: number;
  css?: string;
  handleChangePage?: (page: number) => void;
}


interface ToolsbarOptions {

  ToolsbarActionItem?: {
    icon?: string;
    name?: string;
    iconAlign?: 'left' | 'right' | 'top' | 'bottom';
    handleClick?: () => void;
  }[]
  
  enablePager?: boolean;
  pager?: {
    css?: string;
    align?: 'left' | 'right';
    rowsPerPage?: number;
  }

  allowExportPdf?: boolean;
  allowExportExcel?: boolean;
  allowExportCsv?: boolean;
  handleExportPdf?: () => void;
  handleExportExcel?: () => void;
  handleExportCsv?: () => void;


  enableSearch?: boolean;
  search?: GridSearch

  enablePagination?: boolean;
  pagination?: GridPagination;

  
  totalRows?: number;
  css?: string;
}
